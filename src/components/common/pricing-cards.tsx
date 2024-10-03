"use client";

import PrimaryButton from "@/components/common/primarybutton";
import { BorderBeam } from "@/components/custom/border-beam";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

type PriceColumnProps = {
  highlight?: boolean;
  secondaryButton?: boolean;
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
  return (
    <div className="w-full flex flex-col items-center container -mt-20">
      <section className="mx-auto px-4 md:px-0 w-full md:max-w-7xl">
        <div className=" w-full flex flex-col items-center mt-4">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-4 items-start w-full">
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
                  children: "1 year of updates",
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
                  children: "Copy paste, no complications",
                  checked: true,
                },
              ]}
            />
            <PriceColumn
              buttonText="Get Plan"
              title="Basic"
              price="$29"
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
                  children: "Copy paste, no complications",
                  checked: true,
                },
                {
                  children: "Built with Next.js & React",
                  checked: true,
                },
                {
                  children: "Cancel Anytime",
                  checked: true,
                },
              ]}
            />
            <PriceColumn
              buttonText="Get Plan"
              highlight
              title="Advanced"
              price="$149"
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
                  children: "Priority Support",
                  checked: true,
                },
              ]}
            />
            <PriceColumn
              buttonText="Book Call"
              title="Custom"
              price="Custom"
              secondaryButton
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
  statement,
  items,
  buttonText,
  secondaryButton,
}: PriceColumnProps) => {
  return (
    <div
      className={`relative w-full rounded-xl px-4 py-6 md:px-4 md:py-6 md:hover:-translate-y-6 md:ease-in-out md:transition-all md:duration-500 ${
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

      {highlight && (
        <div className=" absolute inset-0">
          <div className=" rounded-xl border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className=" rounded-xl border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
          <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-xl" />
        </div>
      )}
      <p className="mb-0 text-lg font-normal text-white/70">{title}</p>
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
            className="block text-4xl font-semibold text-white"
          >
            {price}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="mb-4 text-base font-normal text-white/70">{statement}</p>
      <div className="mb-4 space-y-2">
        {items.map((i) => (
          <CheckListItem key={i.children} checked={i.checked}>
            {i.children}
          </CheckListItem>
        ))}
      </div>
      {highlight ? (
        <Button
          variant="secondary"
          className=" bg-white hover:scale-105 ease-in-out transition-all duration-200 mt-2 w-full text-black hover:text-black hover:bg-white/90 relative"
        >
          {buttonText}
        </Button>
      ) : secondaryButton ? (
        <Button
          variant="secondary"
          className=" bg-[#161616] hover:bg-[#161616]/80 w-full"
        >
          {buttonText}
        </Button>
      ) : (
        <PrimaryButton>{buttonText}</PrimaryButton>
      )}
    </div>
  );
};

const CheckListItem = ({ children, checked }: CheckListItemType) => {
  return (
    <div className="flex items-start gap-2 text-base text-white">
      {checked && <Check className=" shrink-0 text-base opacity-70" />}
      {children}
    </div>
  );
};

export default PricingCards;
