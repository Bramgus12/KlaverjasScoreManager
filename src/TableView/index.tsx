import { NavigationProp } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { RoutingType } from "../../Types/RoutingTypes";
import ChoosePlayers from "./ChoosePlayers";
import Table from "./Table";
import { TableContext } from "./TableContext";

function TableView(props: { navigation: NavigationProp<RoutingType, "TableView"> }) {
    const { navigation } = props;
    const { tableState } = useContext(TableContext);

    const styles = StyleSheet.create({
        fabStyle: {
            bottom: 32,
            right: 32,
            position: "absolute",
        },
    });

    return (
        (tableState.amountOfPlayers == null) ? (
            <ChoosePlayers />
        ) : (
            <>
                <Table />
                <FAB
                    icon="plus"
                    label="Voeg score toe"
                    onPress={() => navigation.navigate("CreateRound")}
                    style={styles.fabStyle}
                />
            </>
        )
    );
}

export default TableView;
