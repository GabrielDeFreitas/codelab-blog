import { useQuery } from "@tanstack/react-query";

interface Article {
    id: number;
    title: string;
    description: string;
    cover_image?: string;
    readable_publish_date: string;
    tags: string[];
    url: string;
    user: {
        name: string;
        profile_image: string;
    };
}

const fetchArticles = async (): Promise<Article[]> => {
    const response = await fetch("https://dev.to/api/articles?per_page=3", {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "CodeLabBlog",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch articles");
    }

    return response.json();
};

export const useGetArticles = () =>
    useQuery({
        queryKey: ["articles"],
        queryFn: fetchArticles,
    });