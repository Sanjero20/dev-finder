import { useState } from "react";
import { getTheme, updateTheme } from "./utils/getTheme";
import { Sun, Moon, Search } from "lucide-react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme() == "dark");

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    updateTheme(!isDarkTheme ? "dark" : "light");
  };

  return (
    <div className={isDarkTheme ? "dark" : "light"}>
      <div className="bg-light dark:bg-dark flex h-screen items-center justify-center dark:text-white">
        <main className="m-8 flex h-3/4 w-full flex-col gap-4 rounded-xl lg:w-1/2">
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

          <section className="bg-container dark:bg-container-dark relative flex items-center justify-between rounded-lg p-2 drop-shadow-lg">
            <Search className="text-primary ml-2" size={24} />

            <input
              type="text"
              placeholder="Search Github username"
              className="absolute left-0 h-full w-full rounded-lg bg-transparent pl-14"
            />

            <button className="bg-primary z-10 rounded px-4 py-2">
              Search
            </button>
          </section>

          {/* Profile */}
          <section className="bg-container dark:bg-container-dark h-full rounded-lg p-4 drop-shadow-lg">
            Github Profile
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
