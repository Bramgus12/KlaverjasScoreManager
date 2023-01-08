import { NavigatorScreenParams } from "@react-navigation/native";
import { CreateRoundRoutingType } from "./CreateRoundRoutingTypes";

export type TableRoutingType = {
    ChoosePlayers: undefined;
    TableView: { tableId: string; };
    CreateRound: NavigatorScreenParams<CreateRoundRoutingType>;
};
