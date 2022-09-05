import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

function TableView() {
    return (
        <View style={styles.container}>
            <View style={styles.numberColumn}>
                <View style={styles.topRowNumber} />
                <View style={styles.row}>
                    <Text variant="headlineSmall">
                        1
                    </Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.column}>
                <View style={styles.topRow}>
                    <Text variant="headlineMedium" style={styles.text}>
                        Wij
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text variant="headlineSmall" style={styles.text}>
                        100
                    </Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.column}>
                <View style={styles.topRow}>
                    <Text variant="headlineMedium" style={styles.text}>
                        Zij
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text variant="headlineSmall" style={styles.text}>
                        100
                    </Text>
                </View>
            </View>
        </View>
    )
}

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
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        height: 40,
        display: "flex",
        justifyContent: "center"
    },
    row: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
    },
    topRowNumber: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        height: 40,
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
        backgroundColor: "grey"
    },
    container: { 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        display: "flex", 
        flexDirection: "row",
        padding: 90,
    }
})

export default TableView;