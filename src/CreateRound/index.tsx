import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { rootStackParamType } from "../../Routing";

function CreateRound(props: { navigation: NavigationProp<rootStackParamType, "CreateRound"> }) {
    const { navigation } = props;

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
    
    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.appTitle}>
                Wie gaat er?
            </Text>
            <View style={styles.buttonContainer}>
                <Button 
                    mode="contained-tonal" 
                    labelStyle={styles.startButtonLabel}
                    style={styles.startButton}
                    onPress={() => navigation.navigate("AddPoints", { whoGoes: "we" })}
                    contentStyle={styles.startButtonContent}
                >
                    Wij
                </Button>
                <Button 
                    mode="contained-tonal" 
                    labelStyle={styles.startButtonLabel}
                    onPress={() => navigation.navigate("AddPoints", { whoGoes: "them" })}
                    style={styles.startButton}
                    contentStyle={styles.startButtonContent}
                >
                    Zij
                </Button>
            </View>
        </View>
    )
}

export default CreateRound;