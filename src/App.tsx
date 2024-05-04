import { useState } from "react";
import { getTheme, updateTheme } from "./utils/getTheme";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme() == "dark");

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    updateTheme(!isDarkTheme ? "dark" : "light");
  };

  return (
    <div className={`${isDarkTheme ? "dark" : "light"}`}>
      <div className="flex min-h-screen flex-col items-center justify-center bg-light p-4 text-[#333436] dark:bg-dark dark:text-white">
        <main className="flex h-screen w-full flex-col gap-4 rounded-xl sm:h-5/6 sm:max-w-[750px]">
          <Header isDarkMode={isDarkTheme} toggleFn={toggleTheme} />
          <SearchBar />
          <Profile />
        </main>
      </div>
    </div>
  );
}

export default App;
