import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPoints from "./src/AddPoints";
import CreateRound from "./src/CreateRound";
import Main from "./src/Main";
import TableView from "./src/TableView";

export type rootStackParamType = { 
    Home: undefined, 
    TableView: undefined,
    CreateRound: undefined,
    AddPoints: { whoGoes: "we" | "them" }
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
            <Stack.Screen name="CreateRound" component={CreateRound} />
            <Stack.Screen name="AddPoints" component={AddPoints} />
        </Stack.Navigator>
    )
}

export default Routing;