import {
  Users,
  GraduationCap,
  ClipboardCheck,
  BookOpen,
} from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    title: "Faculty",
    value: "142",
    change: "+12%",
    icon: Users,
    color: "#7c3aed",
  },
  {
    title: "Students",
    value: "3,285",
    change: "+8%",
    icon: GraduationCap,
    color: "#2563eb",
  },
  {
    title: "Attendance",
    value: "95%",
    change: "+2%",
    icon: ClipboardCheck,
    color: "#16a34a",
  },
  {
    title: "Courses",
    value: "48",
    change: "+5%",
    icon: BookOpen,
    color: "#ea580c",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}