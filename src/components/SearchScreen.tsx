import BookItem from "@/components/BookItem";
import useBookSearch from "@/hooks/useBookSearch";
import useDebounce from "@/hooks/useDebounce";
import { globalStyles } from "@/style/global";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

export default function SearchScreen() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  const { loading, error, books } = useBookSearch(debouncedQuery, page);

  const handleEndReached = useCallback(() => {
    if (!loading && books.length > 0) {
      setPage((prev) => prev + 1);
    }
  }, [loading, books.length]);

  return (
    <View>
      <Text style={[globalStyles.text, globalStyles.title]}>
        Search for books
      </Text>

      <TextInput
  style={{
    color: "#111827",
    backgroundColor: "#F9FAFB",
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    marginTop: 12,
  }}
  placeholder="Enter book title..."
  placeholderTextColor="#111827"
  value={query}
  onChangeText={setQuery}
/>

      {loading && (
        <Text style={[globalStyles.text, globalStyles.loading]}>
          Loading...
        </Text>
      )}

      {error && (
        <Text style={[globalStyles.text, globalStyles.error]}>
          Error: {error}
        </Text>
      )}

      {!loading && !error && books.length === 0 && query.trim() !== "" && (
        <Text style={[globalStyles.text, globalStyles.subtitle]}>
          No results found
        </Text>
      )}

      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <BookItem book={item} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        numColumns={2}
        columnWrapperStyle={globalStyles.gridRow}
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{ marginTop: 16 }}
      />
    </View>
  );
}