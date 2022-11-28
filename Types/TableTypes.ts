import { RoundStateType } from "./RoundTypes";

export type AmountOfPlayersType = 3 | 4;

export type TableStateType = {
    amountOfPlayers?: AmountOfPlayersType;
    tableData: RoundStateType[];
    tableId?: string;
};

export type TableContextType = {
    tableState?: TableStateType;
    addAmountOfPlayers?: (AmountOfPlayers: AmountOfPlayersType) => void;
    addRoundToTable?: (round: RoundStateType) => void;
};
