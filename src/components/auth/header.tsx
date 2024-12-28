import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  title: string | null;
  label: string | null;
  imgSrc: string;
}

export const Header = ({ label, imgSrc, title }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Link className="h-10 w-10" href="/">
        <div className="h-10 w-10 relative">
          <Image fill src={imgSrc} alt="Header icon" />
        </div>
      </Link>
      <h1
        className={cn("text-xl mt-6 tracking-tighter font-semibold text-white")}
      >
        {title}
      </h1>
      <p className="text-white/70 tracking-tight text-sm text-center mt-0.5">
        {label}
      </p>
    </div>
  );
};
