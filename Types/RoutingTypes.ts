import { NavigatorScreenParams } from "@react-navigation/native";
import { CreateRoundRoutingType } from "./CreateRoundRoutingTypes";

export type RoutingType = {
    Home: undefined,
    ChoosePlayers: undefined,
    TableView: undefined,
    CreateRound: NavigatorScreenParams<CreateRoundRoutingType>,
};
