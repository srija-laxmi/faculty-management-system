import clsx from "clsx";

export default function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}

      <input
        className={clsx(
          "w-full rounded-2xl border border-slate-300",
          "px-4 py-3",
          "outline-none",
          "transition-all duration-300",
          "focus:border-violet-500",
          "focus:ring-4 focus:ring-violet-200",
          "dark:border-slate-700",
          "dark:bg-slate-900",
          "dark:text-white",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}