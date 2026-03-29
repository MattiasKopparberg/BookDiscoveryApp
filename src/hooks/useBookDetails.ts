import { getBookDetails } from "@/services/openLibrary";
import type { Book } from "@/types/book";
import { useEffect, useState } from "react";

export function useBookDetails(id: string) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setBook(null);
      return;
    }

    const controller = new AbortController();

    async function fetchDetails() {
      try {
        setLoading(true);
        setError(null);

        const data = await getBookDetails(id, controller.signal);
        setBook(data);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
        setError("Could not load book details");
      } finally {
        setLoading(false);
      }
    }

    fetchDetails();
    return () => controller.abort();
  }, [id]);

  return { book, loading, error };
}
