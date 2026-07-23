import { LogOut, UserCircle } from "lucide-react";

export default function SidebarFooter({ collapsed }) {
  return (
    <div className="border-t border-violet-700 p-4">
      <div className="flex items-center gap-3">
        <UserCircle size={40} />

        {!collapsed && (
          <div className="flex-1">
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-xs text-violet-200">
              admin@college.edu
            </p>
          </div>
        )}

        {!collapsed && (
          <button className="rounded-lg p-2 hover:bg-violet-700">
            <LogOut size={18} />
          </button>
        )}
      </div>
    </div>
  );
}