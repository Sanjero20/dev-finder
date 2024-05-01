import { Search } from "lucide-react";

function Searchbar() {
  return (
    <section className="bg-container dark:bg-container-dark relative flex items-center justify-between rounded-lg p-2 drop-shadow-lg">
      <Search className="text-primary ml-2" size={24} />

      <input
        type="text"
        placeholder="Search Github username"
        className="absolute left-0 h-full w-full rounded-lg bg-transparent pl-14"
      />

      <button className="bg-primary z-10 rounded px-4 py-2 font-bold text-white">
        Search
      </button>
    </section>
  );
}

export default Searchbar;
