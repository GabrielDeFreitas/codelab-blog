export interface PaginationProps {
    currentPage: number;
    onPageChange: (newPage: number) => void;
    isNextDisabled: boolean | undefined;
    isPrevDisabled: boolean | undefined;
}