import useBookSearch from "@/hooks/useBookSearch"
import { useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"


export default function SearchScreen() {
    const [query, setQuery] = useState<string>("")
    const [page, setPage] = useState<number>(1)

    const { loading, error, books } = useBookSearch(query, page)

    return (
        <View>
            <View>
                <Text>Search for books:</Text>
                <Text>{query}</Text>
                <TextInput
                    placeholder="Enter book title..."
                    value={query}
                    onChangeText={setQuery}
                />

            </View>
            <ScrollView>
                {loading && <Text>Loading...</Text>}
                {error && <Text>Error: {error}</Text>}
                {books.map((book) => (
                    <Text key={book.key}>{book.title}</Text>
                ))}
            </ScrollView>
        </View>
    )
}