import { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
    DataTable, withTheme,
} from "react-native-paper";
import { TableContext } from "./TableContext";

function Table() {
    const { tableState } = useContext(TableContext);

    const styles = StyleSheet.create({
        roemCell: {
            borderRightWidth: 1,
            borderRightColor: "lightgrey",
            paddingRight: 8,
        },
        totalRow: {
            borderTopColor: "lightgrey",
            borderTopWidth: 1,
        },
        headerRow: {
            borderBottomColor: "lightgrey",
            borderBottomWidth: 1,
        },
    });

    return (
        <SafeAreaView>
            <DataTable>
                <DataTable.Header style={styles.headerRow}>
                    <DataTable.Title numeric style={styles.roemCell}>
                        Ronde
                    </DataTable.Title>
                    <DataTable.Title numeric>
                        Wij
                    </DataTable.Title>
                    <DataTable.Title numeric style={styles.roemCell}>
                        Roem
                    </DataTable.Title>
                    <DataTable.Title numeric>
                        Zij
                    </DataTable.Title>
                    <DataTable.Title numeric style={styles.roemCell}>
                        Roem
                    </DataTable.Title>
                </DataTable.Header>
                {tableState.tableData.map((item) => (
                    <DataTable.Row key={item.roundNumber}>
                        <DataTable.Cell numeric style={styles.roemCell}>
                            {item.roundNumber}
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            {item.points.we}
                        </DataTable.Cell>
                        <DataTable.Cell numeric style={styles.roemCell}>
                            {item.roem.we}
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            {item.points.them}
                        </DataTable.Cell>
                        <DataTable.Cell numeric style={styles.roemCell}>
                            {item.roem.them}
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
                <DataTable.Row style={styles.totalRow}>
                    <DataTable.Cell style={styles.roemCell}>
                        Totaal
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                        {tableState.tableData
                            .reduce((acc, item) => (acc + item.points.we + item.roem.we), 0)}
                    </DataTable.Cell>
                    <DataTable.Cell numeric style={styles.roemCell}>
                        -
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                        {tableState.tableData
                            .reduce((acc, item) => (acc + item.points.them + item.roem.them), 0)}
                    </DataTable.Cell>
                    <DataTable.Cell numeric style={styles.roemCell}>
                        -
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </SafeAreaView>
    );
}

export default withTheme(Table);
