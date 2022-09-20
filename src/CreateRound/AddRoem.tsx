import { NavigationProp } from "@react-navigation/native";
import { useCallback, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
    Button, FAB, IconButton, MD3Theme, Text, withTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreateRoundRoutingType } from "./CreateRoundRoutingType";
import { PointsRoemState, RoundContext } from "./RoundContext";

function AddRoem(props: { theme: MD3Theme, navigation: NavigationProp<CreateRoundRoutingType, "AddRoem"> }) {
    const { theme: { colors }, navigation } = props;

    const [roemState, setRoemState] = useState<PointsRoemState>({
        we: 0,
        them: 0,
    });

    const { addRoem } = useContext(RoundContext);

    const toNextPage = useCallback(() => {
        addRoem(roemState);
        navigation.navigate("AddPoints");
    }, [addRoem, navigation, roemState]);

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
        },
        column: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            height: "100%",
            paddingTop: 16,
            paddingBottom: 16,
        },
        roemContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        title: {
            paddingBottom: 16,
            textAlign: "center",
        },
        pageTitle: {
            paddingTop: 150,
        },
        chip: {
            backgroundColor: colors.secondaryContainer,
            padding: 12,
            minWidth: 70,
            display: "flex",
            alignItems: "center",
            borderRadius: 20,
        },
        chipText: {
            color: colors.primary,
        },
        addButtonsContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
        },
        addButtons: {
            margin: 8,
        },
        break: {
            flexBasis: "100%",
            height: 0,
        },
        fabStyle: {
            bottom: 32,
            right: 32,
            position: "absolute",
        },
    });

    return (
        <>
            <SafeAreaView>
                <Text variant="displayMedium" style={[styles.title, styles.pageTitle]}>
                    Houdt de roem bij!
                </Text>
                <View style={styles.container}>
                    <View style={styles.column}>
                        <Text variant="headlineLarge" style={styles.title}>
                            Wij
                        </Text>
                        <View style={styles.addButtonsContainer}>
                            <View style={styles.roemContainer}>
                                <View style={styles.chip}>
                                    <Text variant="displayLarge" style={styles.chipText}>
                                        {roemState.we}
                                    </Text>
                                </View>
                                <IconButton
                                    icon="backspace"
                                    mode="contained"
                                    onPress={() => (
                                        setRoemState((prev) => ({ ...prev, we: 0 }))
                                    )}
                                />
                            </View>
                            <View style={styles.break} />
                            <Button
                                mode="contained"
                                style={styles.addButtons}
                                onPress={() => (
                                    setRoemState((prev) => ({ ...prev, we: prev.we + 20 }))
                                )}
                            >
                                +20
                            </Button>
                            <Button
                                mode="contained"
                                style={styles.addButtons}
                                onPress={() => (
                                    setRoemState((prev) => ({ ...prev, we: prev.we + 50 }))
                                )}
                            >
                                +50
                            </Button>
                            <View style={styles.break} />
                            <Button
                                mode="contained"
                                style={styles.addButtons}
                                onPress={() => (
                                    setRoemState((prev) => ({ ...prev, we: prev.we + 100 }))
                                )}
                            >
                                +100
                            </Button>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <Text variant="headlineLarge" style={styles.title}>
                            Zij
                        </Text>
                        <View style={styles.addButtonsContainer}>
                            <View style={styles.roemContainer}>
                                <View style={styles.chip}>
                                    <Text variant="displayLarge" style={styles.chipText}>
                                        {roemState.them}
                                    </Text>
                                </View>
                                <IconButton
                                    icon="backspace"
                                    mode="contained"
                                    onPress={() => (
                                        setRoemState((prev) => ({ ...prev, them: 0 }))
                                    )}
                                />
                            </View>
                            <View style={styles.break} />
                            <Button
                                mode="contained"
                                style={styles.addButtons}
                                onPress={() => (
                                    setRoemState((prev) => ({ ...prev, them: prev.them + 20 }))
                                )}
                            >
                                +20
                            </Button>
                            <Button
                                mode="contained"
                                style={styles.addButtons}
                                onPress={() => (
                                    setRoemState((prev) => ({ ...prev, them: prev.them + 50 }))
                                )}
                            >
                                +50
                            </Button>
                            <Button
                                mode="contained"
                                style={styles.addButtons}
                                onPress={() => (
                                    setRoemState((prev) => ({ ...prev, them: prev.them + 100 }))
                                )}
                            >
                                +100
                            </Button>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <FAB
                icon="arrow-right"
                onPress={toNextPage}
                style={styles.fabStyle}
            />
        </>
    );
}

export default withTheme(AddRoem);
