import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function SidebarItem({
  icon: Icon,
  title,
  path,
  collapsed,
}) {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <motion.div
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          className={clsx(
            "group mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200",
            isActive
              ? "bg-violet-600 text-white shadow-lg"
              : "text-slate-300 hover:bg-violet-700 hover:text-white"
          )}
        >
          <Icon size={20} />

          {!collapsed && (
            <span className="font-medium">
              {title}
            </span>
          )}
        </motion.div>
      )}
    </NavLink>
  );
}