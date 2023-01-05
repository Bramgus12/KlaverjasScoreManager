import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/Main";
import TableRouting from "./src/TableView/TableRouting";
import { RoutingType } from "./Types/RoutingTypes";

const Stack = createNativeStackNavigator<RoutingType>();

function Routing() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="Table" component={TableRouting} />
        </Stack.Navigator>
    );
}

export default Routing;
