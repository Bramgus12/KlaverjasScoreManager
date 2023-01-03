import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { DataTable, FAB, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
import { HomeStateType } from "../Types/HomeTypes";
import { RoutingType } from "../Types/RoutingTypes";
import { GetAllTables } from "./Persistence/Table";

function Main(props: { navigation: NavigationProp<RoutingType, "Home"> }) {
    const { navigation } = props;

    const [state, setState] = useState<HomeStateType>({
        isLoading: true,
        tables: null,
    });

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "column",
            width: "100%",
        },
        appTitle: {
            marginTop: 75,
            marginBottom: 32,
        },
        fabStyle: {
            bottom: 32,
            right: 32,
            position: "absolute",
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
        <SafeAreaView style={styles.container}>
            <Text variant="headlineLarge" style={styles.appTitle}>
                Klaverjas scoreboard
            </Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={{ flex: 3 }}>Datum</DataTable.Title>
                    <DataTable.Title numeric>Totaal wij</DataTable.Title>
                    <DataTable.Title numeric>Totaal zij</DataTable.Title>
                </DataTable.Header>
                {state.tables.map((table) => (
                    <DataTable.Row key={table.date.unix()}>
                        <DataTable.Cell style={{ flex: 3 }}>
                            {table.date.format("LLL")}
                        </DataTable.Cell>
                        <DataTable.Cell numeric>{table.totalWe}</DataTable.Cell>
                        <DataTable.Cell numeric>{table.totalThem}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
            <FAB
                icon="plus"
                label="Nieuw spel starten"
                onPress={() => navigation.navigate("ChoosePlayers")}
                style={styles.fabStyle}
            />
        </SafeAreaView>
    );
}

export default Main;
