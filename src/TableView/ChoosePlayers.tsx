import { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";
import { TableContext } from "./TableContext";
import { AmountOfPlayersType } from "../../Types/TableTypes";
import { TableRoutingType } from "../../Types/TableRoutingType";

export default function ChoosePlayers(props: { navigation: NavigationProp<TableRoutingType, "ChoosePlayers"> }) {
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

    const handleButtonPress = useCallback((amountOfPlayers: AmountOfPlayersType) => {
        addAmountOfPlayers(amountOfPlayers);
        navigation.navigate("TableView");
    }, [addAmountOfPlayers, navigation]);

    return (
        <View style={styles.container}>
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
