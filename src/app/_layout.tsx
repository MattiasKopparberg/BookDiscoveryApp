
import { FavoritesProvider } from "@/context/FavoritesContext";
import { Tabs } from "expo-router";
import { Search, Star } from "lucide-react-native";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f59e0b",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          backgroundColor: "#f9fafb",
        }
      }}
      >
        <Tabs.Screen 
        name="index"
        options={{
          title: "search",
          tabBarIcon: () => (
            <Search />
          )
        }}
        />
        <Tabs.Screen 
        name="Favorites"
        options={{
          title: "favorites",
          tabBarIcon: () => (
            <Star />
          )
        }}
        />
      </Tabs>
    </FavoritesProvider>
  );
}