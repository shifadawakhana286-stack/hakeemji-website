import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
         // Extra-wide premium button with more left & right padding.

"group inline-flex items-center justify-center gap-3 rounded-full px-16 py-5 text-[14px] font-semibold tracking-[0.03em] shadow-lg transition-all duration-500",

        variant === "primary" &&
          "bg-[#C9A227] text-white hover:-translate-y-1 hover:shadow-xl",

        variant === "outline" &&
          "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0B5D3B] hover:-translate-y-1",

        variant === "secondary" &&
          "bg-[#0B5D3B] text-white hover:bg-[#08452d]",

        className
      )}
    >
      {children}

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}