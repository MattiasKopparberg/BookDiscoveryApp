import BookItem from "@/components/BookItem";
import FavoritesContext from "@/context/FavoritesContext";
import { globalStyles } from "@/style/global";
import { useContext } from "react";
import { FlatList, Text, View } from "react-native";

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <View style={globalStyles.container}>
        <Text style={[globalStyles.text, globalStyles.title]}>
          No favorite books yet.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => <BookItem book={item} />}
      numColumns={2}
      columnWrapperStyle={globalStyles.gridRow}
    />
  );
}