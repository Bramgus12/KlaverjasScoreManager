import { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { TableContext } from "./TableContext";

export default function ChoosePlayers() {
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
    }, [addAmountOfPlayers]);

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
