import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
    return (
        <Stack>
            <SafeAreaProvider>
                <SafeAreaView>
                    <Stack.Screen name="index" />
                </SafeAreaView>
            </SafeAreaProvider>
        </Stack>
    );
};

export default RootLayout;