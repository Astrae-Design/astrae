"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  label: string;
  highlight: string;
}

export const BackButton = ({ href, label, highlight }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className=" hover:no-underline font-normal text-white w-full group"
      size="sm"
      asChild
    >
      <div>
        {label}
        <Link href={href} className="ml-2 text-[#0096FA] group-hover:underline">
          {highlight}
        </Link>
      </div>
    </Button>
  );
};
