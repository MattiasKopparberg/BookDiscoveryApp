import FavoritesContext from "@/context/FavoritesContext";
import { globalStyles } from "@/style/global";
import type { Book } from "@/types/book";
import { extractWorkId } from "@/utils/extractWorkId";
import { getCoverUrl } from "@/utils/getCoverUrl";
import { useRouter } from "expo-router";
import { Star, StarOff } from "lucide-react-native";
import { useContext } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

interface BookItemProps {
  book: Book;
}

export default function BookItem({ book }: BookItemProps) {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useContext(FavoritesContext);

  const coverUrl = getCoverUrl(book.cover_i);
  const workId = extractWorkId(book.key);
  const favorite = isFavorite(book.key);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/book/${workId}`)}
      activeOpacity={0.8}
      style={{ flex: 1, margin: 6 }}
    >
      <View style={globalStyles.card}>
        {coverUrl ? (
          <Image
            style={{
              width: "100%",
              height: 180,
              borderRadius: 6,
              marginBottom: 8,
            }}
            source={{ uri: coverUrl }}
            resizeMode="cover"
          />
        ) : (
          <View
            style={{
              width: "100%",
              height: 180,
              borderRadius: 6,
              marginBottom: 8,
              backgroundColor: "#E5E7EB",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.coverPlaceholderText}>No cover</Text>
          </View>
        )}

        <Text style={globalStyles.title} numberOfLines={2}>
          {book.title}
        </Text>

        <Text style={[globalStyles.subtitle, { marginBottom: 8 }]} numberOfLines={1}>
          {book.author_name?.join(", ") ?? "Unknown author"}
        </Text>

        <Pressable onPress={() => toggleFavorite(book.key)}>
          {favorite ? (
            <StarOff size={24} color="#FBBF24" />
          ) : (
            <Star size={24} color="#FBBF24" />
          )}
        </Pressable>
      </View>
    </TouchableOpacity>
  );
}