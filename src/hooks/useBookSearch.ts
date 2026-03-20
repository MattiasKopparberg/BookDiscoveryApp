import searchBooks from "@/services/openLibrary";
import type { Book } from "@/types/book";
import { useEffect, useState } from "react";


export default function useBookSearch(query: string, page: number) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (query.trim() === "") {
      setBooks([]);
      return;
    }

    const controller = new AbortController();

    async function fetchBooks() {
      try {
        setLoading(true);
        setError(null);

        const response = await searchBooks(
          query,
          page,
          controller.signal
        );

        setBooks((prev) =>{
          const newBooks = response.filter(
            (book) => !prev.some((b) => b.key === book.key)
          );
        return page === 1 ? response : [...prev, ...newBooks]
        });
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            return;
          }
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();

    return () => controller.abort();
  }, [query, page]);

  return { loading, error, books };
}