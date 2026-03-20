import type { Book } from "@/types/book";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "favorites";

export async function saveFavorites(data: Book[]) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function loadFavorites(): Promise<Book[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}