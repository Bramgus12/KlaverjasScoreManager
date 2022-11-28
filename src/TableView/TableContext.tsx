import {
    createContext, useCallback, useMemo, useState,
} from "react";
import { RoundStateType } from "../../Types/RoundTypes";
import { AmountOfPlayersType, TableContextType, TableStateType } from "../../Types/TableTypes";

export const TableContext = createContext<TableContextType>({
    tableState: null,
    addAmountOfPlayers: null,
    addRoundToTable: null,
});

export function TableProvider(props: { children: React.ReactNode }) {
    const { children } = props;
    const [tableState, setTableState] = useState<TableStateType>({
        amountOfPlayers: null,
        tableData: [],
    });

    const addRoundToTable = useCallback((round: RoundStateType) => {
        setTableState((prev) => (
            {
                ...prev,
                tableData: [
                    ...prev.tableData,
                    { ...round, roundNumber: prev.tableData.length + 1 },
                ],
            }
        ));
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
