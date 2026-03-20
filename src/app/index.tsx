import SearchScreen from "@/components/SearchScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
            <SafeAreaProvider>
                <SafeAreaView>
                    <SearchScreen />
                </SafeAreaView>
            </SafeAreaProvider>
    )
}
