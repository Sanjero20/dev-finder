import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleFn: () => void;
}

function Header({ isDarkMode, toggleFn }: HeaderProps) {
  return (
    <section className="my-2 flex items-end justify-between">
      <h1 className="text-2xl font-bold">devfinder</h1>

      {/* display the oposite theme icon  */}
      <button onClick={toggleFn} className="flex gap-2">
        {isDarkMode ? "Light" : "Dark"}
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
    </section>
  );
}

export default Header;
