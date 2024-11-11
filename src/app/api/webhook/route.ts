import crypto from "crypto";
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import {
  LemonsqueezySubscriptionAttributes,
  LemonsqueezyWebhookPayload,
} from "@/types/lemonsqueezy";

const verifySignature = (
  rawBody: string,
  signature: string,
  secret: string
): boolean => {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const signatureBuffer = Buffer.from(signature, "utf8");
  return (
    digest.length === signatureBuffer.length &&
    crypto.timingSafeEqual(digest, signatureBuffer)
  );
};

export const POST = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const rawBody = await req.text();
    const signature = (req.headers.get("x-signature") as string) || "";
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE || "";

    if (!verifySignature(rawBody, signature, secret)) {
      return new Response("Invalid signature", { status: 401 });
    }

    const payload = JSON.parse(rawBody) as LemonsqueezyWebhookPayload;
    const eventName = payload.meta.event_name;
    const lemonSqueezyId = parseInt(payload.data.id);

    let userId: string | null = payload.meta.custom_data
      ? payload.meta.custom_data.user_id.toString()
      : null;
    userId = userId ?? "";

    let customerId: number | null = null;
    let subscriptionData: LemonsqueezySubscriptionAttributes | undefined;

    if (
      eventName === "subscription_created" ||
      eventName === "subscription_updated" ||
      eventName === "subscription_cancelled" ||
      eventName === "order_created"
    ) {
      subscriptionData = payload.data
        .attributes as LemonsqueezySubscriptionAttributes;
      customerId = subscriptionData.customer_id;
    }

    if (!subscriptionData) {
      return new Response("Subscription data is missing", { status: 400 });
    }

    switch (eventName) {
      case "subscription_created":
      case "subscription_updated":
        let subscriptionType: "FREE" | "BASIC" | "ADVANCE" = "FREE";
        const total = Number(subscriptionData.total) || 0;

        if (total === 14900) {
          subscriptionType = "BASIC";
        } else if (total === 16900) {
          subscriptionType = "ADVANCE";
        }

        await db.subscription.upsert({
          where: { lemonSqueezyId: lemonSqueezyId },
          update: {
            total: total,
            status: subscriptionData.status,
            renewsAt: subscriptionData.renews_at
              ? new Date(subscriptionData.renews_at)
              : null,
            endsAt: subscriptionData.ends_at
              ? new Date(subscriptionData.ends_at)
              : null,
            trialEndsAt: subscriptionData.trial_ends_at
              ? new Date(subscriptionData.trial_ends_at)
              : null,
            userId: userId,
            customerId: customerId,
          },
          create: {
            lemonSqueezyId: lemonSqueezyId,
            customerId: customerId,
            total: total,
            orderId: subscriptionData.order_id,
            name: subscriptionData.product_name,
            email: subscriptionData.user_email,
            status: subscriptionData.status,
            renewsAt: subscriptionData.renews_at
              ? new Date(subscriptionData.renews_at)
              : null,
            endsAt: subscriptionData.ends_at
              ? new Date(subscriptionData.ends_at)
              : null,
            trialEndsAt: subscriptionData.trial_ends_at
              ? new Date(subscriptionData.trial_ends_at)
              : null,
            user: {
              connect: { id: userId },
            },
          },
        });

        // Update user subscription type in a separate operation
        await db.user.update({
          where: { id: userId },
          data: {
            subscriptionType: subscriptionType,
          },
        });
        break;
      case "subscription_cancelled":
        await db.subscription.update({
          where: { lemonSqueezyId: lemonSqueezyId },
          data: {
            status: "cancelled",
            endsAt: new Date(),
            user: {
              update: {
                subscriptionType: "FREE",
              },
            },
          },
        });
        break;
      case "order_created":
        // For order_created, we'll just return success as it's handled by subscription_created
        break;
      default:
        throw new Error(`Unhandled event: ${eventName}`);
    }

    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
