import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardList,
  CalendarDays,
  FileText,
  Settings,
} from "lucide-react";

export const menuItems = [
  { id: 1, title: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { id: 2, title: "Faculty", icon: Users, path: "/faculty" },
  { id: 3, title: "Students", icon: GraduationCap, path: "/students" },
  { id: 4, title: "Attendance", icon: ClipboardList, path: "/attendance" },
  { id: 5, title: "Leave", icon: CalendarDays, path: "/leave" },
  { id: 6, title: "Reports", icon: FileText, path: "/reports" },
  { id: 7, title: "Settings", icon: Settings, path: "/settings" },
];