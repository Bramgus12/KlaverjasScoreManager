import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateRound from ".";
import AddPoints from "./AddPoints";
import AddRoem from "./AddRoem";
import { CreateRoundRoutingType } from "./CreateRoundRoutingType";
import RoundProvider from "./RoundContext";

const Stack = createNativeStackNavigator<CreateRoundRoutingType>();

function CreateRoundRouting() {
    return (
        <RoundProvider>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Main" component={CreateRound} />
                <Stack.Screen name="AddRoem" component={AddRoem} />
                <Stack.Screen name="AddPoints" component={AddPoints} />
            </Stack.Navigator>
        </RoundProvider>
    );
}

export default CreateRoundRouting;
