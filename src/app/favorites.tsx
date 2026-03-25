import BookItem from "@/components/BookItem";
import FavoritesContext from "@/context/FavoritesContext";
import { globalStyles } from "@/style/global";
import type { Book } from "@/types/book";
import { useContext } from "react";
import { FlatList, Text, View } from "react-native";

interface FavoritesScreenProps {
    allBooks: Book[];
}

export default function FavoriitesScreen({ allBooks }: FavoritesScreenProps) {

    const { favorites } = useContext(FavoritesContext) 

    const favoriteBooks = allBooks.filter((book) => favorites[book.key]);

    if (favoriteBooks.length === 0) {
        return(
            <View style={globalStyles.container}>
                <Text style={[globalStyles.text, globalStyles.title]}>No favorite books yet.</Text>
            </View>
        )
    }

    return (
        <FlatList
      data={favoriteBooks}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => <BookItem book={item} />}
      numColumns={2}
      columnWrapperStyle={globalStyles.gridRow}
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ marginTop: 16 }}
    />
    )
}