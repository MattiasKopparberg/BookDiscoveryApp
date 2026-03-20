import BookCard from "@/components/BookCard";
import FavoritesContext from "@/context/FavoritesContext";
import { useBookDetails } from "@/hooks/useBookDetails";
import { globalStyles } from "@/style/global";
import { useLocalSearchParams } from "expo-router";
import { Star, StarOff } from "lucide-react-native";
import { useContext } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function BookDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { book, loading, error } = useBookDetails(id);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const favorite = isFavorite(book?.key ?? "");

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >

      {loading && <Text style={globalStyles.text}>Loading...</Text>}

      {error && <Text style={globalStyles.error}>{error}</Text>}
      
      {!loading && !error && book ? (
        <BookCard
        title={book.title}
        coverId={book.cover_i?.[0] ?? null}
      >
        <View style={{ marginTop: 12 }}>
          <Pressable onPress={() => toggleFavorite(book.key)}>
            {favorite ? (
              <Star size={28} color="#FBBF24" />
            ) : (
              <StarOff size={28} color="#9CA3AF" />
            )}
          </Pressable>
        </View>

        {book.description && (
          <Text style={{ marginTop: 16, color: "#374151" }}>
            {typeof book.description === "string"
              ? book.description
              : book.description.value}
          </Text>
        )}
      </BookCard>
      ): !loading && !error && (
        <Text style={globalStyles.text}>Book not found.</Text>
      )}
      
    </ScrollView>
  );
}