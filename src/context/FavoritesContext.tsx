import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";


interface FavoritesContextType {
  favorites: Record<string, boolean>;
  toggleFavorite: (bookKey: string) => void;
  isFavorite: (bookKey: string) => boolean;
}


const FavoritesContext = createContext<FavoritesContextType>({
  favorites: {},
  toggleFavorite: () => {},
  isFavorite: () => false,
});


export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});


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


  const toggleFavorite = (bookKey: string) => {
    setFavorites((prev) => ({
      ...prev,
      [bookKey]: !prev[bookKey],
    }));
  };


  const isFavorite = (bookKey: string) => !!favorites[bookKey];


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