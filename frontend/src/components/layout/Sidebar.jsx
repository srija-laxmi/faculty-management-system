import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Faculty" },
  { icon: GraduationCap, label: "Students" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col bg-violet-700 text-white shadow-xl">
      <div className="border-b border-violet-600 p-6">
        <h1 className="text-2xl font-bold">FacultyMS</h1>
        <p className="text-sm text-violet-200">
          Patna Women's College
        </p>
      </div>

      <nav className="mt-6 flex-1 px-4">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="mb-2 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-violet-600"
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}