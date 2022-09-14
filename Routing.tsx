import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RoutingType } from "./RoutingType";
import Main from "./src/Main";
import TableView from "./src/TableView";
import CreateRoundRouting from "./src/CreateRound/CreateRoundRouting";

const Stack = createNativeStackNavigator<RoutingType>();

function Routing() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="TableView" component={TableView} />
            <Stack.Screen name="CreateRound" component={CreateRoundRouting} />
        </Stack.Navigator>
    );
}

export default Routing;
