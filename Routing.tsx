import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RoutingType } from "./RoutingType";
import Main from "./src/Main";
import TableView from "./src/TableView";
import CreateRoundRouting from "./src/CreateRound/CreateRoundRouting";
import { TableProvider } from "./src/TableView/TableContext";

const Stack = createNativeStackNavigator<RoutingType>();

function Routing() {
    return (
        <TableProvider>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="TableView" component={TableView} />
                <Stack.Screen name="CreateRound" component={CreateRoundRouting} />
            </Stack.Navigator>
        </TableProvider>
    );
}

export default Routing;
