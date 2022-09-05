import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper"
import { rootStackParamType } from "../Routing";

function Main(props: { navigation: NavigationProp<rootStackParamType, "Home"> }) {
    const { navigation } = props;
    

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
                    onPress={() => navigation.navigate("TableView")}
                    contentStyle={styles.startButtonContent}
                    uppercase
                >
                    3
                </Button>
                <Button 
                    mode="contained-tonal" 
                    labelStyle={styles.startButtonLabel}
                    style={styles.startButton}
                    onPress={() => navigation.navigate("TableView")}
                    contentStyle={styles.startButtonContent}
                    uppercase
                >
                    4
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
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
    }
})

export default Main;