import {
    createContext, useCallback, useMemo, useState,
} from "react";
import { RoundStateType } from "../CreateRound/RoundContext";

export type AmountOfPlayersType = 3 | 4;

export type TableStateType = {
    amountOfPlayers?: AmountOfPlayersType;
    tableData: RoundStateType[];
};

type ContextType = {
    tableState?: TableStateType;
    addRoundToTable?: (round: RoundStateType) => void;
    addAmountOfPlayers?: (AmountOfPlayers: AmountOfPlayersType) => void;
};

export const TableContext = createContext<ContextType>({
    tableState: null,
    addRoundToTable: null,
});

export function TableProvider(props: { children: React.ReactNode }) {
    const { children } = props;
    const [tableState, setTableState] = useState<TableStateType>({
        amountOfPlayers: null,
        tableData: [],
    });

    const addRoundToTable = useCallback((round: RoundStateType) => {
        setTableState((prev) => ({ ...prev, tableData: [...prev.tableData, round] }));
    }, []);

    const addAmountOfPlayers = useCallback((amountOfPlayers: AmountOfPlayersType) => {
        setTableState((prev) => ({ ...prev, amountOfPlayers }));
    }, []);

    return (
        <TableContext.Provider
            value={useMemo(() => (
                { tableState, addRoundToTable, addAmountOfPlayers }
            ), [addRoundToTable, tableState, addAmountOfPlayers])}
        >
            {children}
        </TableContext.Provider>
    );
}
