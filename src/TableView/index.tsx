import { NavigationProp } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { TableRoutingType } from "../../Types/TableRoutingType";
import Table from "./Table";

function TableView(props: { navigation: NavigationProp<TableRoutingType, "TableView"> }) {
    const { navigation } = props;
    const styles = StyleSheet.create({
        fabStyle: {
            bottom: 32,
            right: 32,
            position: "absolute",
        },
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
