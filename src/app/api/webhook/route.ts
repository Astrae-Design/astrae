"use server";

import { db } from "@/lib/db";
import { SubscriptionType } from "@prisma/client";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;
    if (!secret) {
      throw new Error("Webhook signature secret is not set.");
    }

    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    console.log(body);

    // Logic according to event type
    if (eventType === "order_created") {
      const attributes = body.data.attributes;

      const price = attributes.total_formatted;

      let subscriptionType: SubscriptionType;
      if (price === "$169.00") {
        subscriptionType = SubscriptionType.ADVANCE;
      } else if (price === "$149.00") {
        subscriptionType = SubscriptionType.BASIC;
      } else {
        subscriptionType = SubscriptionType.FREE;
      }

      await db.subscription.create({
        data: {
          userId: body.meta.custom_data.user_id,
          isPaused: false,
          lemonSqueezyId: body.data.id,
          email: body.data.attributes.user_email,
          name: body.data.attributes.user_name,
          orderId: body.data.attributes.order_number,
          price: body.data.attributes.total_formatted,
          status: body.data.attributes.status_formatted,
          endsAt: body.data.attributes.ends_at,
          renewsAt: body.data.attributes.renews_at,
          subscriptionType: subscriptionType,
        },
      });
    }

    return Response.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
