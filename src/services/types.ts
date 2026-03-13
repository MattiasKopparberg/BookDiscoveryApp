export interface OpenLibraryDoc {
    key: string;
    title: string;
    author_name?: string[]
}

export interface OpenLibrarySearchResponse {
  docs: OpenLibraryDoc[];
}