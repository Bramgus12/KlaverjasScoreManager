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
import { RoundContext, WhoGoesType } from "./RoundContext";

type FormType = {
    we: string;
    them: string;
};

function AddPoints() {
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

    const { roundState, addPoints } = useContext(RoundContext);

    const {
        control, getValues, handleSubmit, setValue,
    } = useForm<FormType>({
        defaultValues: {
            we: "",
            them: "",
        },
    });

    const Buttons = useCallback((props: { isGoing: boolean, team: WhoGoesType }) => {
        const { isGoing, team } = props;

        const onPitPress = useCallback(() => {
            setValue(team, "162", { shouldDirty: true });
            setValue((team === "we") ? team : "them", "0", { shouldDirty: true });
        }, [team]);

        return (
            <View style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <Button
                        mode="contained"
                        onPress={onPitPress}
                    >
                        Pit
                    </Button>
                </View>
                {(isGoing) ? (
                    <View style={styles.buttons}>
                        <Button
                            mode="contained"
                        >
                            Nat
                        </Button>
                    </View>
                ) : null}
            </View>
        );
    }, [setValue, styles.buttons, styles.buttonsContainer]);

    const TotalPoints = useCallback((props: { roem: number, points: number }) => {
        const { roem, points } = props;
        return (
            <Text style={styles.formColumnText}>
                {`Total: ${roem + points}`}
            </Text>
        );
    }, [styles.formColumnText]);

    const handleToNextPage = useCallback((state: FormType) => {
        addPoints({ we: parseInt(state.we, 10), them: parseInt(state.them, 10) });
    }, [addPoints]);

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
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        <TotalPoints roem={roundState.roem.we} points={roundState.points.we} />
                        <Buttons isGoing={roundState.whoGoes === "we"} team="we" />
                    </View>
                    <View style={styles.formColumn}>
                        <Text variant="displaySmall" style={styles.formColumnText}>
                            Zij
                        </Text>
                        <Controller
                            control={control}
                            name="them"
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
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <TotalPoints roem={roundState.roem.them} points={roundState.points.them} />
                        <Buttons isGoing={roundState.whoGoes === "them"} team="them" />
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
