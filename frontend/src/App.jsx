import Button from "./components/ui/Button";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <h1 className="text-5xl font-bold">
        Button Component
      </h1>

      <Button onClick={toggleTheme}>
        Toggle Theme
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="danger">
        Delete
      </Button>

      <Button loading>
        Saving...
      </Button>
    </div>
  );
}