export type Project = {
    id: string,
documentId: string,
    title: string,
    description: string,
    image: string,
    url: string,
    date: string,
    category: string,
    featured: boolean,
}
export type Posts = {
    id: string,
    documentId: string,
    title: string,
    image?: string,
    post?: string,
    slug: string,
    excerpt: string,
    date: string,
}
export type StrapiResponse<res> = {
    data: res[],
}
export type StrapiProject = {
    id: string,
    documentId: string,
    title: string,
    description: string,
    image?: {
        url: string;
        formats?: {
            thumbnail: { url: string},
            small: { url: string},
            medium: { url: string},
            large: { url: string},
        }
    },
    url: string,
    date: string,
    category: string,
    featured: boolean,   
}
export type StrapiPost = {
    id: string,
    documentId: string,
    title: string,
    post: string,
    slug: string,      
    excerpt: string,
    date: string,
    image?: {
        url: string;
        formats?: {
            thumbnail: { url: string},
            small: { url: string},
            medium: { url: string},
            large: { url: string},
        }
    },
}