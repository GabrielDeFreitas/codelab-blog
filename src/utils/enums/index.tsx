export const RoutesUrls = {
    BASE_URL: "/articles",
    API_URL: "https://dev.to/api/articles"

} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]