import { Subscription, SubscriptionType } from "@prisma/client";
import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  subscriptionType: SubscriptionType;
  subscription: Subscription | null;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
