import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-8">
          <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
            Dashboard Content Coming Soon
          </div>
        </main>
      </div>
    </div>
  );
}