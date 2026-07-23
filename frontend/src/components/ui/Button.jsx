import { Loader2 } from "lucide-react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-700 active:scale-95",

  secondary:
    "bg-white text-slate-800 border border-slate-300 hover:bg-slate-100",

  outline:
    "border border-violet-600 text-violet-600 hover:bg-violet-50",

  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
  sm: "px-3 py-2 text-sm",

  md: "px-5 py-2.5 text-base",

  lg: "px-7 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-300",

        "disabled:cursor-not-allowed disabled:opacity-60",

        variants[variant],

        sizes[size],

        className
      )}
      {...props}
    >
      {loading && (
        <Loader2
          size={18}
          className="animate-spin"
        />
      )}

      {children}
    </button>
  );
}