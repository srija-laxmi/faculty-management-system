import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import StatsGrid from "../components/dashboard/StatsGrid";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 bg-slate-100 p-8 dark:bg-slate-950">
          <StatsGrid />
        </main>
      </div>
    </div>
  );
}