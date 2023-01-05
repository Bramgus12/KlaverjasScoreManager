import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TableView from ".";
import CreateRoundRouting from "../CreateRound/CreateRoundRouting";
import { TableProvider } from "./TableContext";
import ChoosePlayers from "./ChoosePlayers";
import { TableRoutingType } from "../../Types/TableRoutingType";

const Stack = createNativeStackNavigator<TableRoutingType>();

function TableRouting() {
    return (
        <TableProvider>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="ChoosePlayers" component={ChoosePlayers} />
                <Stack.Screen name="TableView" component={TableView} />
                <Stack.Screen name="CreateRound" component={CreateRoundRouting} />
            </Stack.Navigator>
        </TableProvider>
    );
}

export default TableRouting;
