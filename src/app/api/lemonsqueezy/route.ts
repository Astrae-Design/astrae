/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/auth";
import { lemonSqueezyApiInstance } from "@/utils/axios";

export const dynamic = "force-dynamic";

export async function POST(req: any) {
  try {
    const session = await auth();

    if (!session) {
      return Response.json(
        { message: "Unauthorized. Please log in." },
        { status: 401 }
      );
    }

    const reqData = await req.json();

    if (!reqData.productId) {
      return Response.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: session.user.id,
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID?.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data.data.attributes.url;

    return Response.json({ checkoutUrl });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "An error occurred" }, { status: 500 });
  }
}
