import { Search } from "lucide-react";

function Searchbar() {
  return (
    <section className="relative flex items-center justify-between rounded-lg bg-container p-2 drop-shadow-lg dark:bg-container-dark">
      <Search className="ml-2 text-primary" size={24} />

      <input
        type="text"
        placeholder="Search Github username"
        className="absolute left-0 h-full w-full text-ellipsis rounded-lg bg-transparent pl-14 pr-28"
      />

      <button className="z-10 rounded bg-primary px-4 py-2 font-bold text-white">
        Search
      </button>
    </section>
  );
}

export default Searchbar;
