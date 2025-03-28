export function Search() {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input id="search" type="text" placeholder="Search article" className="w-full p-4 rounded-md font-medium text-2xl text-dark-50 bg-dark-30 border-2 border-dark-40" />
    </div>
  )
}
