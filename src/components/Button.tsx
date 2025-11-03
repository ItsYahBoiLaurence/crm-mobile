import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { colors } from "../styles/colors";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  style?: any;
};

export const PrimaryButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  mode = "contained",
  icon,
  loading = false,
  disabled = false,
  style,
}) => {
  return (
    <Button
      mode={mode}
      icon={icon}
      loading={loading}
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style]}
      contentStyle={styles.content}
      labelStyle={styles.label}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: colors.royalBlue,
    color: colors.white,
  },
  content: {
    paddingVertical: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
});
