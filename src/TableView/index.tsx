import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator, FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { TableRoutingType } from "../../Types/TableRoutingType";
import Table from "./Table";
import { TableContext } from "./TableContext";

function TableView(props: { navigation: NavigationProp<TableRoutingType, "TableView">, route: RouteProp<TableRoutingType, "TableView"> }) {
    const { navigation, route } = props;
    const { tableState, getExistingTableStateById } = useContext(TableContext);
    const styles = StyleSheet.create({
        fabStyle: {
            bottom: 32,
            right: 32,
            position: "absolute",
        },
        loadingSpinnerContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        },
    });

    useEffect(() => {
        if (route.params != null && tableState?.tableId == null) {
            getExistingTableStateById(route.params.tableId);
        }
    });

    if (tableState?.tableId == null) {
        return (
            <SafeAreaView style={styles.loadingSpinnerContainer}>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        );
    }

    return (
        <>
            <Table />
            <FAB
                icon="plus"
                label="Voeg score toe"
                onPress={() => navigation.navigate("CreateRound")}
                style={styles.fabStyle}
            />
        </>
    );
}

export default TableView;
