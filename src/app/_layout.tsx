
import { FavoritesProvider } from "@/context/FavoritesContext";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </FavoritesProvider>
  );
}