import { globalStyles } from "@/style/global";
import type { Book } from "@/types/book";
import { getCoverUrl } from "@/utils/getCoverUrl";
import { Image, Text, View } from "react-native";

interface BookCardProps {
  book: Book;
  children?: React.ReactNode;
}

export default function BookCard({
  book,
  children,
}: BookCardProps) {

  const coverUrl = getCoverUrl(book.cover_i);

  return (
    <View style={globalStyles.card}>
      {coverUrl ? (
        <Image
          style={globalStyles.cover}
          source={{ uri: coverUrl }}
          resizeMode="cover"
        />
      ) : (
        <View style={globalStyles.coverPlaceholder}>
          <Text style={globalStyles.coverPlaceholderText}>
            No cover
          </Text>
        </View>
      )}

      <Text style={globalStyles.title} numberOfLines={2}>
        {book.title}
      </Text>

      <Text style={globalStyles.subtitle} numberOfLines={1}>
        {book.author_name.length > 0
          ? book.author_name.join(", ")
          : "Unknown author"}
      </Text>

      {children}
    </View>
  );
}