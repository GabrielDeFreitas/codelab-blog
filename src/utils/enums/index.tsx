export const RoutesUrls = {
    BASE_URL: "/",
    API_URL: "https://dev.to/api/articles"

} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]