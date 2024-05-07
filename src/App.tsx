import { useState, FormEvent } from "react";
import { getTheme, updateTheme } from "./utils/getTheme";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme() == "dark");

  const [username, setUsername] = useState("");
  const [accountData, setAccountData] = useState<unknown>(null);
  const [error, setError] = useState("");

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    updateTheme(!isDarkTheme ? "dark" : "light");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const response = await fetch(`https://api.github.com/users/${username}`);
    const parsedData = await response.json();

    if (response.status == 200) {
      setAccountData(parsedData);
      setUsername("");
    } else {
      setAccountData(null);
      setError(parsedData.message);
    }
  };

  return (
    <div className={`${isDarkTheme ? "dark" : "light"}`}>
      <div className="flex min-h-screen flex-col items-center justify-center bg-light p-4 text-[#333436] dark:bg-dark dark:text-white">
        <main className="flex h-screen w-full flex-col gap-4 rounded-xl sm:h-5/6 sm:max-w-[750px]">
          <Header isDarkMode={isDarkTheme} toggleFn={toggleTheme} />
          <SearchBar
            value={username}
            setValue={setUsername}
            handleSubmit={handleSubmit}
          />

          <section className="flex h-full min-h-96 w-full gap-8 rounded-lg bg-container p-8 drop-shadow-lg dark:bg-container-dark">
            {!error ? (
              <Profile data={accountData} />
            ) : (
              <p className="w-full text-center text-xl">{error}</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
