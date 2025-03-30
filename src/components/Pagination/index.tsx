export function Pagination() {
    return (
        <div className="col-span-12 space-x-1">
            <button className="text-dark-60 font-medium text-xl border-2 border-dark-40 rounded-md bg-dark-20 hover:border-brand-color p-4 active:bg-brand-color">
                Prev
            </button>
            <button className="text-dark-60 font-medium text-xl border-2 border-dark-40 rounded-md bg-dark-20 hover:border-brand-color p-4 active:bg-brand-color">
                1
            </button>
            <button className="text-dark-60 font-medium text-xl border-2 border-dark-40 rounded-md bg-dark-20 hover:border-brand-color p-4 active:bg-brand-color">
                2
            </button>
            <button className="text-dark-60 font-medium text-xl border-2 border-dark-40 rounded-md bg-dark-20 hover:border-brand-color p-4 active:bg-brand-color">
                3
            </button>
            <button className="text-dark-60 font-medium text-xl border-2 border-dark-40 rounded-md bg-dark-20 hover:border-brand-color p-4 active:bg-brand-color">
                Next
            </button>
        </div>
    )
}