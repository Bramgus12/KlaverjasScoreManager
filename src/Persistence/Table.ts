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
        await AsyncStorage.setItem(id, json);
        return await Promise.resolve(id);
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
            returnValue.date = moment(id.replace("table-", ""));
            returnValue.tableId = id;
            return returnValue;
        }).sort((a, b) => {
            if (a.date.isSame(b.date)) {
                return 0;
            }
            if (a.date.isBefore(b.date)) {
                return 1;
            }
            return -1;
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

async function GetTableById(tableId: string) {
    try {
        const jsonStringValue = await AsyncStorage.getItem(tableId);
        const returnValue = JSON.parse(jsonStringValue) as TableStateType;
        returnValue.date = moment(tableId.replace("table-", ""));
        returnValue.tableId = tableId;
        return returnValue;
    } catch (error) {
        Promise.reject(error);
    }
}

export {
    SetTable, GetAllTables, GetAllTableIds, GetTableById,
};
