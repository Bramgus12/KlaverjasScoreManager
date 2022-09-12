import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

function AddPoints() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
        },
        formContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        },
        formColumn: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
        },
        break: {
            flexBasis: "100%",
            height: 0,
        },
        textInput: {
            margin: 8,
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text variant="headlineLarge">
                Vul de punten in
            </Text>
            <View style={styles.formContainer}>
                <View style={styles.formColumn}>
                    <Text>
                        Wij
                    </Text>
                    <TextInput 
                        mode="flat"
                        label="Punten"
                        style={styles.textInput}
                        dense
                        autoCorrect={false}
                        keyboardAppearance="dark"
                        keyboardType="numeric"
                        maxLength={3}
                    />
                </View>
                <View style={styles.formColumn}>
                    <Text>
                        Zij
                    </Text>
                    <TextInput
                        mode="flat"
                        label="Punten"
                        style={styles.textInput}
                        dense
                        autoCorrect={false}
                        keyboardAppearance="dark"
                        keyboardType="numeric"
                        maxLength={3}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddPoints;