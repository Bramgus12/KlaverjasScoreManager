import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { TableStateType } from "../../Types/TableTypes";

async function SetTable(tableState: TableStateType): Promise<void> {
    try {
        const json = JSON.stringify(tableState);
        await AsyncStorage.setItem(`table-${moment().toISOString(true)}`, json);
    } catch (error) {
        console.error(error);
    }
}

async function GetAllTables(): Promise<TableStateType[]> {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const data = await AsyncStorage.multiGet(keys.filter((key) => key.includes("table")));
        const returnData = data.map((value) => {
            const returnValue = JSON.parse(value[1]) as TableStateType;
            const id = value[0];
            returnValue.tableId = id;
            return returnValue;
        });
        return returnData;
    } catch (error) {
        console.error(error);
    }
}

export { SetTable, GetAllTables };
