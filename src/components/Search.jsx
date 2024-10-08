import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setSearchInput, searchInput } = useGlobalContext();

  const searchHandle = () => {
    setSearchInput(search);
  };

  useEffect(() => {
    if (searchInput && !search) {
      setSearch(searchInput);
    }
  }, [searchInput]);

  return (
    <div className="w-[100%] max-w-96 px-4">
      <div className="relative flex w-full flex-wrap items-stretch">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
          className="text-white relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] font-normal leading-[1.6] text-white-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600  dark:placeholder:text-white-200 dark:focus:border-primary"
          placeholder="Search City or Zip Code"
          aria-label="Search"
          aria-describedby="button-addon1"
        />

        <button
          onClick={searchHandle}
          className="relative z-[2] flex items-center rounded-r bg-white px-6 py-2.5 text-xs font-medium uppercase leading-tight text-primary shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="button-addon1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
