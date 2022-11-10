import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    useCallback, useContext,
} from "react";
import { Controller, useForm } from "react-hook-form";
import {
    Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View,
} from "react-native";
import {
    Button, FAB, Text, TextInput,
} from "react-native-paper";
import { RoutingType } from "../../RoutingType";
import parseNumber from "../../utils/parseNumber";
import { CreateRoundRoutingType } from "./CreateRoundRoutingType";
import { RoundContext } from "./RoundContext";
import { WhoGoesType } from "./RoundContextTypes";
import TotalPoints from "./TotalPoints";

type FormType = {
    we: string;
    them: string;
};

type AddPointsNavigationProp = CompositeNavigationProp<NativeStackNavigationProp<CreateRoundRoutingType, "AddPoints">, NativeStackNavigationProp<RoutingType>>;

function AddPoints(props: { navigation: AddPointsNavigationProp }) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            height: "100%",
            marginTop: -200,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        formContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
        },
        formColumn: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: "100%",
        },
        break: {
            flexBasis: "100%",
            height: 0,
        },
        textInput: {
            margin: 8,
        },
        formColumnText: {
            textAlign: "center",
        },
        buttons: {
            padding: 8,
            flex: 1,
        },
        buttonsContainer: {
            display: "flex",
            flexDirection: "row",
        },
        title: {
            paddingBottom: 16,
        },
        fabStyle: {
            position: "absolute",
            bottom: 32,
            right: 32,
        },
    });

    const {
        roundState, addWePoints, addThemPoints, addPointsToTable,
    } = useContext(RoundContext);
    // eslint-disable-next-line react/prop-types
    const { navigation } = props;

    const {
        control, getValues, handleSubmit, setValue,
    } = useForm<FormType>({
        defaultValues: {
            we: "",
            them: "",
        },
    });

    const handlePitPress = useCallback((team: WhoGoesType) => {
        setValue(team, "162");
        setValue((team === "we") ? "them" : "we", "0");
    }, [setValue]);

    const handleNatPress = useCallback((team: WhoGoesType) => {
        setValue(team, "0");
        setValue((team === "we") ? "them" : "we", "162");
    }, [setValue]);

    const Buttons = useCallback((_props: {
        isGoing: boolean;
        team: WhoGoesType;
        onPitPress: (team: WhoGoesType) => void;
        onNatPress: (team: WhoGoesType) => void;
    }) => {
        const {
            isGoing, team, onPitPress, onNatPress,
        } = _props;

        return (
            <View style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <Button
                        mode="contained"
                        onPress={() => onPitPress(team)}
                    >
                        Pit
                    </Button>
                </View>
                {(isGoing) ? (
                    <View style={styles.buttons}>
                        <Button
                            mode="contained"
                            onPress={() => onNatPress(team)}
                        >
                            Nat
                        </Button>
                    </View>
                ) : null}
            </View>
        );
    }, [styles.buttons, styles.buttonsContainer]);

    const handleToNextPage = useCallback(() => {
        addPointsToTable();
        navigation.navigate("TableView");
    }, [addPointsToTable, navigation]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <Text variant="headlineLarge" style={styles.title}>
                    Vul de punten in
                </Text>
                <View style={styles.formContainer}>
                    <View style={styles.formColumn}>
                        <Text variant="displaySmall" style={styles.formColumnText}>
                            Wij
                        </Text>
                        <Controller
                            control={control}
                            name="we"
                            defaultValue=""
                            rules={{
                                required: true,
                                max: 162,
                                min: 0,
                                validate: (value) => (
                                    parseInt(value, 10) + parseInt(getValues().them, 10) === 162
                                ) || "Punten van beide teams moeten bij elkaar 162 zijn",
                            }}
                            render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    mode="flat"
                                    label="Punten"
                                    style={styles.textInput}
                                    dense
                                    autoCorrect={false}
                                    keyboardAppearance="dark"
                                    keyboardType="numeric"
                                    maxLength={3}
                                    value={value}
                                    onChangeText={(text) => {
                                        onChange(text);
                                        addWePoints(parseNumber(text));
                                    }}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        <TotalPoints
                            roem={roundState.roem.we}
                            points={parseNumber(getValues().we)}
                        />
                        <Buttons
                            isGoing={roundState.whoGoes === "we"}
                            team="we"
                            onPitPress={handlePitPress}
                            onNatPress={handleNatPress}
                        />
                    </View>
                    <View style={styles.formColumn}>
                        <Text variant="displaySmall" style={styles.formColumnText}>
                            Zij
                        </Text>
                        <Controller
                            control={control}
                            name="them"
                            defaultValue=""
                            rules={{
                                required: true,
                                max: 162,
                                min: 0,
                                validate: (value) => (
                                    parseInt(value, 10) + parseInt(getValues().we, 10) === 162
                                ) || "Punten van beide teams moeten bij elkaar 162 zijn",
                            }}
                            render={({ field: { value, onChange, onBlur } }) => (
                                <TextInput
                                    mode="flat"
                                    label="Punten"
                                    style={styles.textInput}
                                    dense
                                    onBlur={onBlur}
                                    autoCorrect={false}
                                    keyboardAppearance="dark"
                                    keyboardType="numeric"
                                    maxLength={3}
                                    value={value}
                                    onChangeText={(text) => {
                                        onChange(text);
                                        addThemPoints(parseNumber(text));
                                    }}
                                />
                            )}
                        />
                        <TotalPoints
                            roem={roundState.roem.them}
                            points={parseNumber(getValues().them)}
                        />
                        <Buttons
                            isGoing={roundState.whoGoes === "them"}
                            team="them"
                            onPitPress={handlePitPress}
                            onNatPress={handleNatPress}
                        />
                    </View>
                </View>
                <FAB
                    icon="arrow-right"
                    onPress={handleSubmit(handleToNextPage)}
                    style={styles.fabStyle}
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default AddPoints;
