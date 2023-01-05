import { NavigatorScreenParams } from "@react-navigation/native";
import { CreateRoundRoutingType } from "./CreateRoundRoutingTypes";

export type TableRoutingType = {
    ChoosePlayers: undefined,
    TableView: undefined,
    CreateRound: NavigatorScreenParams<CreateRoundRoutingType>,
};
