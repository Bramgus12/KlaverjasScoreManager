import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function TotalPoints(_props: { roem: number, points: number }) {
    const styles = StyleSheet.create({
        formColumnText: {
            textAlign: "center",
        },
    });

    const { roem, points } = _props;

    return (
        <Text style={styles.formColumnText}>
            {`Total: ${roem + points}`}
        </Text>
    );
}
