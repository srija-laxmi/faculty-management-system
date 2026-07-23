import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <h1 className="text-5xl font-bold mb-8">
        Faculty Management System
      </h1>

      <button
        onClick={toggleTheme}
        className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700 transition"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}