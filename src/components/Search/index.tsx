import { ChangeEvent, useState } from "react";

export function Search() {
  const [search, setSearch] = useState("");
  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input id="search" type="text" placeholder="Search article" onChange={onSearchInputChanged} className="w-full p-4 rounded-md font-medium text-2xl text-dark-50 bg-dark-30 border-2 border-dark-40" />
      <p className="text-dark-50 mt-2">{search}</p>
    </div>
  )
}
