import { Bell, Moon, Sun, User } from "lucide-react";
import { Button } from "../ui";
import useTheme from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </Button>

        <Bell className="cursor-pointer" />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}