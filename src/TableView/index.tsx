import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
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
    });

    useEffect(() => {
        if (route.params != null && tableState.tableId == null) {
            getExistingTableStateById(route.params.tableId);
        }
    });

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
