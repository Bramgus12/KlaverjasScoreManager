import { NavigatorScreenParams } from "@react-navigation/native";
import { CreateRoundRoutingType } from "./src/CreateRound/CreateRoundRoutingType";

export type RoutingType = {
    Home: undefined,
    TableView: undefined,
    CreateRound: NavigatorScreenParams<CreateRoundRoutingType>,
};
