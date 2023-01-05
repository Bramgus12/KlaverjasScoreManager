import { NavigatorScreenParams } from "@react-navigation/native";
import { TableRoutingType } from "./TableRoutingType";

export type RoutingType = {
    Home: undefined,
    Table: NavigatorScreenParams<TableRoutingType>,
};
