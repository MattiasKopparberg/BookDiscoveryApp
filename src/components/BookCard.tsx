import { globalStyles } from "@/style/global";
import { Image, Text, View } from "react-native";

interface BookCardProps {
  title: string;
  author?: string;
  coverId?: string | null;
  children?: React.ReactNode;
}

export default function BookCard({
  title,
  author,
  coverId,
  children,
}: BookCardProps) {
  return (
    <View style={globalStyles.card}>
      {coverId ? (
        <Image
          style={globalStyles.cover}
          source={{
            uri: `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`,
          }}
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
        {title}
      </Text>

      <Text style={globalStyles.subtitle} numberOfLines={1}>
        {author ?? "Unknown author"}
      </Text>

      {children}
    </View>
  );
}