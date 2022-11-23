import { NavigationProp } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import {
    FAB, MD3Theme, Text, withTheme,
} from "react-native-paper";
import { RoutingType } from "../../RoutingType";
import { TableContext } from "./TableContext";

function TableView(props: { theme: MD3Theme, navigation: NavigationProp<RoutingType, "TableView"> }) {
    const { navigation, theme: { colors } } = props;
    const { tableState } = useContext(TableContext);

    const styles = StyleSheet.create({
        column: {
            height: "100%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
        },
        numberColumn: {
            width: "10%",
            display: "flex",
            flexDirection: "column",
            height: "100%",
        },
        topRow: {
            height: 40,
            display: "flex",
            justifyContent: "center",
            backgroundColor: colors.primary,
        },
        row: {
            backgroundColor: colors.primaryContainer,
        },
        topRowNumber: {
            height: 40,
            backgroundColor: colors.primary,
        },
        text: {
            textAlign: "center",
        },
        textHidden: {
            backfaceVisibility: "hidden",
        },
        divider: {
            height: "100%",
            width: 1,
            backgroundColor: "grey",
        },
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            padding: 90,
        },
        fabStyle: {
            bottom: 32,
            right: 32,
            position: "absolute",
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.numberColumn}>
                <View style={{ ...styles.topRowNumber, borderTopLeftRadius: 10 }} />
                {tableState.tableData.map((round) => (
                    <View style={styles.row} key={round.roundNumber}>
                        <Text variant="headlineSmall" style={styles.text}>
                            {round.roundNumber}
                        </Text>
                    </View>
                ))}
            </View>
            <View style={styles.column}>
                <View style={styles.topRow}>
                    <Text variant="headlineMedium" style={{ ...styles.text, color: "white" }}>
                        Wij
                    </Text>
                </View>
                {tableState.tableData.map((round) => (
                    <View style={styles.row} key={round.roundNumber}>
                        <Text variant="headlineSmall" style={styles.text}>
                            {round.points.we + round.roem.we}
                        </Text>
                    </View>
                ))}
            </View>
            <View style={styles.column}>
                <View style={{ ...styles.topRow, borderTopRightRadius: 10 }}>
                    <Text variant="headlineMedium" style={{ ...styles.text, color: "white" }}>
                        Zij
                    </Text>
                </View>
                {tableState.tableData.map((round) => (
                    <View style={styles.row} key={round.roundNumber}>
                        <Text variant="headlineSmall" style={styles.text}>
                            {round.points.them + round.roem.them}
                        </Text>
                    </View>
                ))}
            </View>
            <FAB
                icon="plus"
                label="Voeg score toe"
                onPress={() => navigation.navigate("CreateRound")}
                style={styles.fabStyle}
            />
        </View>
    );
}

export default withTheme(TableView);
