import { StyleSheet } from "react-native";
import { spacing } from "./spacing";

export const globalStyles = StyleSheet.create({
    container: {
        padding: spacing.sm
    },
    card: {
        padding: spacing.sm
    },
    text_dark: {
        color: "black"
    },
    text_light: {
        color: "white"
    },
    text_muted: {
        color: "#CFCCCC"
    }
})