import { useState } from "react";
import { getTheme, updateTheme } from "./utils/getTheme";
import { Sun, Moon } from "lucide-react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme() == "dark");

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    updateTheme(!isDarkTheme ? "dark" : "light");
  };

  return (
    <div className={isDarkTheme ? "dark" : "light"}>
      <div className="bg-light dark:bg-dark flex h-screen items-center justify-center dark:text-white">
        <main className="m-8 h-3/4 w-full rounded-xl lg:w-1/2">
          {/* Head */}
          <section className="flex items-end justify-between">
            <h1 className="text-2xl font-bold">devfinder</h1>
            <button onClick={toggleTheme} className="flex gap-2">
              {/* display the oposite theme  */}
              {isDarkTheme ? "Light" : "Dark"}
              {isDarkTheme ? <Sun /> : <Moon />}
            </button>
          </section>

          {/* Search bar */}

          {/* Profile */}
        </main>
      </div>
    </div>
  );
}

export default App;
