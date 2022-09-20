import { Provider as PaperProvider, MD3LightTheme } from "react-native-paper";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routing from "./Routing";

const theme = {
    ...MD3LightTheme,
};

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <Routing />
                <StatusBar barStyle="dark-content" />
            </PaperProvider>
        </NavigationContainer>
    );
}
