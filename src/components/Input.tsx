import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { colors } from "../styles/colors";

type CustomTextInputProps = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  icon?: string;
  error?: string;
  style?: any;
};

export const PrimaryTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  icon,
  error,
  style,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = secureTextEntry;

  return (
    <View style={style}>
      <TextInput
        label={label}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !showPassword}
        mode="outlined"
        left={icon ? <TextInput.Icon icon={icon} /> : undefined}
        right={
          isPassword ? (
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : undefined
        }
        outlineColor={error ? colors.pink : colors.black}
        activeOutlineColor={error ? colors.pink : colors.black}
        style={styles.input}
        textColor="black"
      />

      {error ? (
        <HelperText type="error" visible={true}>
          {error}
        </HelperText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
