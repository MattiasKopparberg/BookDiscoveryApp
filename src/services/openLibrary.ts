import type {
  OpenLibraryDoc,
  OpenLibrarySearchResponse,
  OpenLibraryWork,
} from "@/services/types";
import type { Book } from "@/types/book";

export default async function searchBooks(
  query: string,
  page: number,
  signal?: AbortSignal,
): Promise<Book[]> {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&page=${page}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data: OpenLibrarySearchResponse = await response.json();

  if (!data || !Array.isArray(data.docs)) {
    throw new Error("Received an unexpected response format");
  }

  return data.docs.map((doc: OpenLibraryDoc) => ({
    key: doc.key,
    title: doc.title,
    author_name: doc.author_name ?? [],
    cover_i: doc.cover_i,
    description: "",
  }));
}

export async function getBookDetails(
  id: string,
  signal?: AbortSignal,
): Promise<Book> {
  const response = await fetch(`https://openlibrary.org/works/${id}.json`, {
    signal,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch book details");
  }

  const data: OpenLibraryWork = await response.json();

  return {
    key: data.key,
    title: data.title,
    author_name: data.author_name ?? [],
    cover_i: data.cover_i ? String(data.cover_i) : undefined,
    description:
      typeof data.description === "string"
        ? data.description
        : (data.description?.value ?? ""),
  };
}
