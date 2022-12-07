import {
    createContext, useCallback, useMemo, useState,
} from "react";
import { RoundStateType } from "../../Types/RoundTypes";
import { AmountOfPlayersType, TableContextType, TableStateType } from "../../Types/TableTypes";
import { SetTable } from "../Persistence/Table";

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

    const updateStateAndStorage = useCallback((
        newFields
        : { amountOfPlayers?: AmountOfPlayersType, newRound?: RoundStateType },
    ) => {
        const { newRound } = newFields;
        if (newRound != null) {
            newRound.roundNumber = tableState.tableData.length + 1;
        }
        SetTable({
            ...tableState,
            ...(newFields.amountOfPlayers != null
                ? { amountOfPlayers: newFields.amountOfPlayers } : {}),
            ...(newRound != null
                ? { tableData: [...tableState.tableData, newRound] } : {}),
        })
            .then((id) => setTableState((prev) => ({
                ...prev,
                ...(newFields.amountOfPlayers != null
                    ? { amountOfPlayers: newFields.amountOfPlayers } : {}),
                ...(newRound != null
                    ? { tableData: [...prev.tableData, newRound] } : {}),
                tableId: id,
            })));
    }, [tableState]);

    const addRoundToTable = useCallback((round: RoundStateType) => {
        updateStateAndStorage({ newRound: round });
    }, [updateStateAndStorage]);

    const addAmountOfPlayers = useCallback((amountOfPlayers: AmountOfPlayersType) => {
        updateStateAndStorage({ amountOfPlayers });
    }, [updateStateAndStorage]);

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
