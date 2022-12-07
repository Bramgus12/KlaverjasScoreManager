import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { TableStateType } from "../../Types/TableTypes";

/**
 * Set a table in storage. It creates a tableId based on the time you create it.
 * @param tableState The complete state of the table that you want to create/update.
 * @returns Promise with the newly generated ID, and error in the catch.
 */
async function SetTable(tableState: TableStateType): Promise<string> {
    try {
        const json = JSON.stringify(tableState);
        let id = `table-${moment().toISOString(true)}`;
        if (tableState.tableId != null) {
            id = tableState.tableId;
        }
        await Promise.resolve(AsyncStorage.setItem(id, json));
        return id;
    } catch (error) {
        return Promise.reject(error);
    }
}

/**
 * Get all the tables from storage.
 * @returns The tables in storage. Error will be caught and put in catch.
 */
async function GetAllTables(): Promise<TableStateType[]> {
    try {
        return await Promise.resolve((await AsyncStorage.multiGet(
            (await AsyncStorage.getAllKeys())
                .filter((key) => key.includes("table")),
        )).map((value) => {
            const returnValue = JSON.parse(value[1]) as TableStateType;
            const id = value[0];
            returnValue.tableId = id;
            return returnValue;
        }));
    } catch (error) {
        return Promise.reject(error);
    }
}

/**
 * Get all Table Id's from storage.
 * @returns All the table Id's that are in storage
 */
async function GetAllTableIds() {
    try {
        return await Promise.resolve((await AsyncStorage.getAllKeys())
            .filter((key) => key.includes("table")));
    } catch (error) {
        return Promise.reject(error);
    }
}

export { SetTable, GetAllTables, GetAllTableIds };
