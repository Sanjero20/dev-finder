import { FormEvent } from "react";
import { Search } from "lucide-react";

interface SearchbarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
}

function Searchbar({ value, setValue, handleSubmit }: SearchbarProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center justify-between rounded-lg bg-container p-2 drop-shadow-lg dark:bg-container-dark"
    >
      <Search className="ml-2 text-primary" size={24} />

      <input
        type="text"
        placeholder="Search Github username"
        className="absolute left-0 h-full w-full text-ellipsis rounded-lg bg-transparent pl-14 pr-28"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="z-10 rounded bg-primary px-4 py-2 font-bold text-white">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
