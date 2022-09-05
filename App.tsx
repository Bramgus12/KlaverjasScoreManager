import Main from "./src/Main";
import { Provider as PaperProvider, MD3LightTheme } from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";

const theme = {
    ...MD3LightTheme
}

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaView>
                <Main />
            </SafeAreaView>
            <StatusBar barStyle="dark-content" />
        </PaperProvider>
    );
}
