import { PaginationProps } from "./types";

export function Pagination({ currentPage, onPageChange, isNextDisabled, isPrevDisabled, }: PaginationProps) {
    return (
        <div className="col-span-12 space-x-1">
            <button
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={isPrevDisabled}
                className="text-dark-60 font-medium text-xl border-2 border-dark-40 rounded-md bg-dark-20 hover:border-brand-color p-4 active:bg-brand-color disabled:opacity-50"
            >
                Prev
            </button>
            <span className="text-dark-60 font-medium text-xl border-2 border-brand-color rounded-md bg-dark-20 p-4">
                {currentPage}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={isNextDisabled}
                className="text-dark-60 font-medium text-xl border-2 border-dark-40 rounded-md bg-dark-20 hover:border-brand-color p-4 active:bg-brand-color disabled:opacity-50"
            >
                Next
            </button>
        </div>
    )
}