import { PrimaryButton } from "@/src/components/Button";
import { PrimaryTextInput } from "@/src/components/Input";
import { useAuthStore } from "@/src/store";
import { globalStyles } from "@/src/styles/global";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { useRouter } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Login() {
  const { login } = useAuthStore();
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin: SubmitHandler<{
    email: string;
    password: string;
  }> = (data) => {
    login();
    router.replace("/(tabs)/clients");
    console.log(data);
  };

  return (
    <View style={[globalStyles.container, styles.container]}>
      <View
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          gap: spacing.md,
        }}
      >
        <View style={styles.form_field}>
          <Text style={[globalStyles.text_dark, styles.heading]}>Login</Text>
          <Text style={[globalStyles.text_dark]}>Welcome back to the app</Text>
        </View>

        <View style={styles.form_field}>
          <Text style={[styles.form_label, globalStyles.text_dark]}>
            Email Address
          </Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <PrimaryTextInput
                onChangeText={onChange}
                value={value}
                placeholder="juan@example.com"
              />
            )}
          />
        </View>

        <View style={styles.form_field}>
          <Text style={[styles.form_label, globalStyles.text_dark]}>
            Password
          </Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <PrimaryTextInput
                onChangeText={onChange}
                value={value}
                placeholder="Your password here..."
                secureTextEntry
              />
            )}
          />
        </View>

        <PrimaryButton
          title="Login"
          mode="elevated"
          onPress={handleSubmit(handleLogin)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: typography.heading,
    fontWeight: 900,
    textAlign: "left",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  form_field: {
    display: "flex",
    gap: spacing.xs,
  },
  form_label: {
    fontWeight: "700",
  },
});
