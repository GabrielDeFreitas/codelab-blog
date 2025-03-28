import { useQuery } from "@tanstack/react-query";
import { articles } from "../../mock/articles";

interface Article {
    id: number;
    date: string;
    title: string;
    description: string;
}

const fetchArticles = (): Promise<Article[]> => Promise.resolve(articles);

export const useGetArticles = () =>
    useQuery({
        queryKey: ["articles"],
        queryFn: fetchArticles,
    });