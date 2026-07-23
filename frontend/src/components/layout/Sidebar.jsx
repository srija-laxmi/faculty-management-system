import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuItems } from "../../constants/menu";
import { useSidebar } from "../../context/SidebarContext";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`${
        collapsed ? "w-24" : "w-72"
      } flex h-screen flex-col bg-violet-800 text-white transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between border-b border-violet-700 p-5">
        {!collapsed && (
          <div>
            <h1 className="text-xl font-bold">
              FacultyMS
            </h1>

            <p className="text-xs text-violet-200">
              Patna Women's College
            </p>
          </div>
        )}

        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 hover:bg-violet-700"
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto p-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            {...item}
            collapsed={collapsed}
          />
        ))}
      </div>

      {/* Footer */}
      <SidebarFooter collapsed={collapsed} />
    </aside>
  );
}