import { PrimaryButton } from "@/src/components/Button";
import { PrimaryTextInput } from "@/src/components/Input";
import { useClientStore } from "@/src/store/useClientStore";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

export default function NewClient() {
  const { addNewClient } = useClientStore();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      contactNumber: "",
      notes: "",
    },
  });

  const onSubmit: SubmitHandler<{
    name: string;
    contactNumber: string;
    notes: string;
  }> = (data) => {
    addNewClient(data);
    console.log(data);
    reset();
  };

  return (
    <View
      style={{
        padding: spacing.md,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: typography.title, fontWeight: "600" }}>
        Lead Details
      </Text>
      <View style={styles.form}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View>
              <Text>Name</Text>
              <PrimaryTextInput
                value={value}
                onChangeText={onChange}
                placeholder="Juan Dela Cruz"
              />
            </View>
          )}
        />
        <Controller
          name="contactNumber"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View>
              <Text>Phone Number</Text>
              <PrimaryTextInput
                value={value}
                onChangeText={onChange}
                placeholder="+63 999 982 4441"
              />
            </View>
          )}
        />
        <Controller
          name="notes"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View>
              <Text>Notes</Text>
              <PrimaryTextInput value={value} onChangeText={onChange} />
            </View>
          )}
        />
        <PrimaryButton title={"Submit"} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
    padding: spacing.md,
  },
});
