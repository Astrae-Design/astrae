"use client";

import PrimaryButton from "@/components/common/primarybutton";
import { BorderBeam } from "@/components/custom/border-beam";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";

type PriceColumnProps = {
  highlight?: boolean;
  secondaryButton?: boolean;
  bookCallButton?: boolean;
  productId?: string;
  title: string;
  price: string;
  buttonText: string;
  statement: string;
  items: CheckListItemType[];
};

type CheckListItemType = {
  children: string;
  checked: boolean;
};

const PricingCards = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "60mins" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#0096FA" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="w-full flex flex-col items-center container -mt-10">
      <section className="mx-auto  w-full md:max-w-7xl pb-12">
        <div className=" w-full flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4 items-start w-full h-full">
            <PriceColumn
              secondaryButton
              buttonText="Get Started"
              title="Free"
              price="$0"
              statement="Forever"
              items={[
                {
                  children: "Access free templates",
                  checked: true,
                },
                {
                  children: "Buy only templates you need",
                  checked: true,
                },
                {
                  children: "Copy paste, no complications",
                  checked: true,
                },
              ]}
            />
            <PriceColumn
              buttonText="Get Basic Plan"
              productId="576111"
              title="Basic"
              price="$149"
              statement="Paid yearly"
              items={[
                {
                  children: "1 year access to all templates",
                  checked: true,
                },
                {
                  children: "1 year of updates",
                  checked: true,
                },
                {
                  children: "1 year of new templates",
                  checked: true,
                },

                {
                  children: "Built with Next.js & React",
                  checked: true,
                },
              ]}
            />
            <PriceColumn
              buttonText="Get Advance Plan"
              highlight
              productId="576125"
              title="Advanced"
              price="$169"
              statement="One-time purchase"
              items={[
                {
                  children: "Lifetime access to all templates",
                  checked: true,
                },
                {
                  children: "Lifetime access to updates & new templates",
                  checked: true,
                },

                {
                  children: "Copy paste, no complications",
                  checked: true,
                },
                {
                  children: "Built with Next.js & React",
                  checked: true,
                },
                {
                  children: "Frequent Updates",
                  checked: true,
                },
                {
                  children: "Priority Support",
                  checked: true,
                },
              ]}
            />
            <PriceColumn
              bookCallButton
              buttonText="Book Call"
              title="Enterprise"
              price="Custom"
              statement="Paid yearly"
              items={[
                {
                  children: "Custom tailored to needs",
                  checked: true,
                },
                {
                  children: "Ongoing support",
                  checked: true,
                },
                {
                  children: "Maintenance",
                  checked: true,
                },
                {
                  children: "Priority Support",
                  checked: true,
                },
                {
                  children: "Custom Branding & Copy",
                  checked: true,
                },
                {
                  children: "Launch Support",
                  checked: true,
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const PriceColumn = ({
  highlight,
  title,
  price,
  productId,
  statement,
  items,
  buttonText,
  secondaryButton,
  bookCallButton,
}: PriceColumnProps) => {
  const router = useRouter();
  const id = productId;

  const [loading, setLoading] = useState(false);

  const getPlan = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/lemonsqueezy", {
        productId: id,
      });
      if (response.data.checkoutUrl) {
        toast.success("Redirecting you to checkout...", {
          style: {
            border: "1px solid #262626",
            padding: "16px",
            background: "#161616",
            color: "#FFF",
          },
          iconTheme: {
            primary: "#10b981",
            secondary: "#FFF",
          },
        });
        router.push(response.data.checkoutUrl);
      } else {
        const callbackUrl = `/pricing`;
        router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
        toast.error("Please login first", {
          style: {
            border: "1px solid #262626",
            padding: "16px",
            background: "#161616",
            color: "#FFF",
          },
          iconTheme: {
            primary: "#ef4444",
            secondary: "#FFF",
          },
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          const callbackUrl = `/pricing`;
          router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
        } else {
          toast.error("Something went wrong!", {
            style: {
              border: "1px solid #262626",
              padding: "16px",
              background: "#161616",
              color: "#FFF",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#FFF",
            },
          });
        }
      } else {
        toast.error("Couldn't load lemonsqueezy checkout!", {
          style: {
            border: "1px solid #262626",
            padding: "16px",
            background: "#161616",
            color: "#FFF",
          },
          iconTheme: {
            primary: "#ef4444",
            secondary: "#FFF",
          },
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`relative  w-full rounded-xl h-full px-4 py-6 md:px-4 md:py-6 lg:hover:-translate-y-6 lg:ease-in-out lg:transition-all lg:duration-500 ${
        highlight
          ? "bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_8px_#0096FA]"
          : "border border-white/10 bg-[#161616]/50 backdrop-blur-sm group"
      }`}
    >
      {!highlight && (
        <div className=" hidden group-hover:block rounded-xl">
          <BorderBeam />
        </div>
      )}

      <div className="flex flex-col justify-between h-full">
        {highlight && (
          <div className=" absolute inset-0">
            <div className=" rounded-xl border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            <div className=" rounded-xl border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
            <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-xl" />
          </div>
        )}
        <div>
          <p className="mb-0 text-base font-normal text-white/70">{title}</p>
          <div className="mb-1 flex items-end gap-3">
            <AnimatePresence mode="popLayout">
              <motion.span
                initial={{
                  y: 24,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -24,
                  opacity: 0,
                }}
                key={price}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="block text-3xl font-semibold text-white"
              >
                {price}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mb-4 text-sm font-normal text-white/70">{statement}</p>
          <div className="mb-4 space-y-2">
            {items.map((i) => (
              <CheckListItem key={i.children} checked={i.checked}>
                {i.children}
              </CheckListItem>
            ))}
          </div>
        </div>
        {highlight ? (
          <Button
            onClick={getPlan}
            variant="secondary"
            className=" bg-white mt-1.5 w-full text-black hover:text-black hover:bg-white/90 relative"
          >
            {loading ? <Loader2 className=" animate-spin" /> : buttonText}
          </Button>
        ) : secondaryButton ? (
          <Link href="/welcome">
            <Button
              variant="secondary"
              className=" bg-[#161616] hover:bg-[#161616]/80 w-full"
            >
              {buttonText}
            </Button>
          </Link>
        ) : bookCallButton ? (
          <Button
            data-cal-namespace="60mins"
            data-cal-link="astrae/60mins"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            variant="secondary"
            className=" bg-[#161616] hover:bg-[#161616]/80 w-full"
          >
            {buttonText}
          </Button>
        ) : (
          <div onClick={getPlan} className=" w-full h-fit">
            <PrimaryButton>
              {loading ? <Loader2 className=" animate-spin" /> : buttonText}
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};

const CheckListItem = ({ children, checked }: CheckListItemType) => {
  // Determine the appropriate alignment class based on the character count of children
  const alignmentClass =
    typeof children === "string" && children.length > 40
      ? "items-start"
      : "items-center";

  return (
    <div className={`flex ${alignmentClass} gap-2 text-sm text-white`}>
      {checked && <Check className="shrink-0 h-4 w-4 text-sm opacity-70" />}
      {children}
    </div>
  );
};

export default PricingCards;
