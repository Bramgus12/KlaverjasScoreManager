import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { DataTable, Text } from "react-native-paper";
import { HomeStateType } from "../Types/HomeTypes";
import { GetAllTables } from "./Persistence/Table";

function Main() {
    const [state, setState] = useState<HomeStateType>({
        isLoading: true,
        tables: null,
    });

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            width: "100%",
        },
    });

    useEffect(() => {
        if (state.isLoading && state.tables == null) {
            GetAllTables().then((tableArray) => setState((prev) => ({
                ...prev,
                tables: tableArray.map((table) => ({
                    totalThem: table.tableData
                        .reduce((total, round) => total + round.points.them + round.roem.them, 0),
                    totalWe: table.tableData
                        .reduce((total, round) => total + round.points.we + round.roem.we, 0),
                    date: table.date,
                })),
            }))).finally(() => setState((prev) => ({ ...prev, isLoading: false })));
        }
    }, [state.isLoading, state.tables]);

    if (state.isLoading) {
        return (
            <View>
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={{ flex: 3 }}>Datum</DataTable.Title>
                    <DataTable.Title numeric>Totaal wij</DataTable.Title>
                    <DataTable.Title numeric>Totaal zij</DataTable.Title>
                </DataTable.Header>
                {state.tables.map((table) => (
                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 3 }}>
                            {table.date.format("LLL")}
                        </DataTable.Cell>
                        <DataTable.Cell numeric>{table.totalWe}</DataTable.Cell>
                        <DataTable.Cell numeric>{table.totalThem}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </View>
    );
}

export default Main;
