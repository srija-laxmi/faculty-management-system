import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  change,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl bg-white p-6 shadow-md transition-all dark:bg-slate-900"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

          <p className="mt-3 text-sm font-medium text-green-500">
            {change}
          </p>
        </div>

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
          style={{ backgroundColor: color }}
        >
          <Icon size={30} />
        </div>
      </div>
    </motion.div>
  );
}