import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import {
    FAB, MD3Theme, Text, withTheme,
} from "react-native-paper";
import { RoutingType } from "../../RoutingType";

function TableView(props: { theme: MD3Theme, navigation: NavigationProp<RoutingType, "TableView"> }) {
    const { navigation, theme: { colors } } = props;

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
                {Array.from(Array(10).keys()).map((number) => (
                    <View style={styles.row} key={number}>
                        <Text variant="headlineSmall" style={styles.text}>
                            {number}
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
                {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((number) => (
                    <View style={styles.row} key={number}>
                        <Text variant="headlineSmall" style={styles.text}>
                            {number}
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
                {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((number) => (
                    <View style={styles.row} key={number}>
                        <Text variant="headlineSmall" style={styles.text}>
                            {number}
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
