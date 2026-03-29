export interface OpenLibraryDoc {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: string;
}

export interface OpenLibraryWork {
  key: string;
  title: string;
  description?: string | { value: string };
  author_name?: string[];
  subjects?: string[];
  cover_i?: string;
}

export interface OpenLibrarySearchResponse {
  docs: OpenLibraryDoc[];
}
