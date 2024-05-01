import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import { getTheme, updateTheme } from "./utils/getTheme";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme() == "dark");

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    updateTheme(!isDarkTheme ? "dark" : "light");
  };

  return (
    <div className={isDarkTheme ? "dark" : "light"}>
      <div className="bg-light dark:bg-dark flex h-screen items-center justify-center p-4 dark:text-white">
        <main className="flex h-full w-full flex-col gap-4 rounded-xl sm:h-3/4 sm:w-3/4 lg:w-1/2">
          <Header isDarkMode={isDarkTheme} toggleFn={toggleTheme} />
          <SearchBar />

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
