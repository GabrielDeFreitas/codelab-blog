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

const API_URL = "https://dev.to/api/articles"

const fetchArticles = async (page: number, perPage: number): Promise<Article[]> => {
    const response = await fetch(`${API_URL}?page=${page}&per_page=${perPage}`, {
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

export const useGetArticles = (page: number, perPage: number) =>
    useQuery({
        queryKey: ["articles", page, perPage],
        queryFn: () => fetchArticles(page, perPage),
    });