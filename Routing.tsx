import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/Main";
import TableView from "./src/TableView";

export type rootStackParamType = { 
    Home: undefined, 
    TableView: undefined, 
}

const Stack = createNativeStackNavigator<rootStackParamType>();

function Routing() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="TableView" component={TableView} />
        </Stack.Navigator>        
    )
}

export default Routing;