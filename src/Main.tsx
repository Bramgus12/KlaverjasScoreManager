import { NavigationProp } from "@react-navigation/native";
import { useCallback, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { RoutingType } from "../RoutingType";
import { TableContext } from "./TableView/TableContext";

function Main(props: { navigation: NavigationProp<RoutingType, "Home"> }) {
    const { navigation } = props;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        appTitle: {
            marginBottom: 150,
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "row",
        },
        startButton: {
            margin: 10,
        },
        startButtonLabel: {
            fontSize: 20,
            height: 15,
            lineHeight: 20,
        },
        startButtonContent: {
            height: 40,
        },
    });

    const { addAmountOfPlayers } = useContext(TableContext);

    const handleButtonPress = useCallback((amountOfPlayers: 3 | 4) => {
        addAmountOfPlayers(amountOfPlayers);
        navigation.navigate("TableView");
    }, [addAmountOfPlayers, navigation]);

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.appTitle}>
                Klaverjas scoreboard
            </Text>
            <Text>
                Kies het aantal personen
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained-tonal"
                    labelStyle={styles.startButtonLabel}
                    style={styles.startButton}
                    onPress={() => handleButtonPress(3)}
                    contentStyle={styles.startButtonContent}
                    uppercase
                >
                    3
                </Button>
                <Button
                    mode="contained-tonal"
                    labelStyle={styles.startButtonLabel}
                    style={styles.startButton}
                    onPress={() => handleButtonPress(4)}
                    contentStyle={styles.startButtonContent}
                    uppercase
                >
                    4
                </Button>
            </View>
        </View>
    );
}

export default Main;
