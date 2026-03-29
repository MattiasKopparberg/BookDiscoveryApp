import type { Book } from "@/types/book";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

interface FavoritesContextType {
  favorites: Book[];
  toggleFavorite: (book: Book) => void;
  isFavorite: (bookKey: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const json = await AsyncStorage.getItem("favorites");
        if (json) {
          setFavorites(JSON.parse(json));
        }
      } catch (error) {
        console.error("Failed to load favorites", error);
      }
    };
    loadFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (error) {
        console.error("Failed to save favorites", error);
      }
    };
    saveFavorites();
  }, [favorites]);

  const toggleFavorite = (book: Book) => {
    setFavorites((prev) => {
      const exists = prev.some((b) => b.key === book.key);

      if (exists) {
        return prev.filter((b) => b.key !== book.key);
      } else {
        return [...prev, book];
      }
    });
  };

  const isFavorite = (bookKey: string) => {
    return favorites.some((b) => b.key === bookKey);
  };

  const value = useMemo(
    () => ({ favorites, toggleFavorite, isFavorite }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;