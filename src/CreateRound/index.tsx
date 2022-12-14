import { NavigationProp } from "@react-navigation/native";
import {
    useCallback, useContext, useMemo,
} from "react";
import { StyleSheet, View } from "react-native";
import {
    Avatar,
    FAB,
    RadioButton,
    Text,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { TurfType, WhoGoesType } from "../../Types/RoundTypes";
import { RoundContext } from "./RoundContext";
import { TableRoutingType } from "../../Types/TableRoutingType";

type FormType = {
    whoGoes: WhoGoesType;
    turf: TurfType;
};

function CreateRound(props: { navigation: NavigationProp<TableRoutingType, "CreateRound"> }) {
    const { navigation } = props;
    const { addWhoGoes, addTurf } = useContext(RoundContext);
    const { control, handleSubmit, formState: { errors } } = useForm<FormType>({
        defaultValues: {
            whoGoes: null,
            turf: null,
        },
    });

    const rules = useMemo(() => ({ required: true }), []);

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
            margin: 16,
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
        },
        icon: {
            backgroundColor: "transparent",
        },
        iconContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        fabStyle: {
            bottom: 32,
            right: 32,
            position: "absolute",
        },
        break: {
            flexBasis: "100%",
            height: 0,
        },
        errorText: {
            color: "red",
        },
    });

    const onSubmit = useCallback((state: FormType) => {
        addWhoGoes(state.whoGoes);
        addTurf(state.turf);
        navigation.navigate("CreateRound", { screen: "AddRoem" });
    }, [addTurf, addWhoGoes, navigation]);

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.appTitle}>
                Wie gaan er?
            </Text>
            <View style={styles.buttonContainer}>
                <Controller
                    control={control}
                    rules={rules}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text variant="titleLarge">
                                Wij
                            </Text>
                            <RadioButton.Android
                                status={(value === "we") ? "checked" : "unchecked"}
                                value="we"
                                onPress={() => onChange("we")}
                            />
                            <Text variant="titleLarge">
                                Zij
                            </Text>
                            <RadioButton.Android
                                status={(value === "them") ? "checked" : "unchecked"}
                                value="them"
                                onPress={() => onChange("them")}
                            />
                        </>
                    )}
                    name="whoGoes"
                />
                <View style={styles.break} />
                <Text style={styles.errorText}>
                    {errors.whoGoes && "Je moet aangeven wie er gaat!"}
                </Text>
            </View>
            <Text variant="headlineLarge" style={styles.appTitle}>
                Wat is troef?
            </Text>
            <View style={styles.buttonContainer}>
                <Controller
                    control={control}
                    rules={rules}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <View style={styles.iconContainer}>
                                <Avatar.Icon icon="cards-spade" style={styles.icon} color="black" />
                                <RadioButton.Android
                                    status={(value === "Spades") ? "checked" : "unchecked"}
                                    value="Spades"
                                    onPress={() => onChange("Spades")}
                                />
                            </View>
                            <View style={styles.iconContainer}>
                                <Avatar.Icon icon="cards-heart" style={styles.icon} color="red" />
                                <RadioButton.Android
                                    status={(value === "Hearts") ? "checked" : "unchecked"}
                                    value="Hearts"
                                    onPress={() => onChange("Hearts")}
                                />
                            </View>
                            <View style={styles.iconContainer}>
                                <Avatar.Icon icon="cards-club" style={styles.icon} color="black" />
                                <RadioButton.Android
                                    status={(value === "Clubs") ? "checked" : "unchecked"}
                                    value="Clubs"
                                    onPress={() => onChange("Clubs")}
                                />
                            </View>
                            <View style={styles.iconContainer}>
                                <Avatar.Icon icon="cards-diamond" style={styles.icon} color="red" />
                                <RadioButton.Android
                                    status={(value === "Diamonds") ? "checked" : "unchecked"}
                                    value="Diamonds"
                                    onPress={() => onChange("Diamonds")}
                                />
                            </View>
                        </>
                    )}
                    name="turf"
                />
                <View style={styles.break} />
                <Text style={styles.errorText}>
                    {errors.turf && "Je moet aangeven wat de troef is!"}
                </Text>
            </View>
            <FAB
                icon="arrow-right"
                onPress={handleSubmit(onSubmit)}
                style={styles.fabStyle}
            />
        </View>
    );
}

export default CreateRound;
