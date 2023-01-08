import {
    createContext, useCallback, useMemo, useState,
} from "react";
import { RoundStateType } from "../../Types/RoundTypes";
import { AmountOfPlayersType, TableContextType, TableStateType } from "../../Types/TableTypes";
import { GetTableById, SetTable } from "../Persistence/Table";

export const TableContext = createContext<TableContextType>({
    tableState: null,
    addAmountOfPlayers: null,
    addRoundToTable: null,
    getExistingTableStateById: null,
});

export function TableProvider(props: { children: React.ReactNode }) {
    const { children } = props;
    const [tableState, setTableState] = useState<TableStateType>({
        amountOfPlayers: null,
        tableId: null,
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

    const getExistingTableStateById = useCallback((tableId: string) => {
        GetTableById(tableId).then((value) => {
            setTableState(value);
        });
    }, []);

    return (
        <TableContext.Provider
            value={useMemo(() => (
                {
                    tableState, addRoundToTable, addAmountOfPlayers, getExistingTableStateById,
                }
            ), [tableState, addRoundToTable, addAmountOfPlayers, getExistingTableStateById])}
        >
            {children}
        </TableContext.Provider>
    );
}
