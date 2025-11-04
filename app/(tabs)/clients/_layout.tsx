import { useClientStore } from "@/src/store/useClientStore";
import { colors } from "@/src/styles/colors";
import { ClientLevelPriority } from "@/src/types/client";
import { Stack } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Searchbar, SegmentedButtons } from "react-native-paper";

export default function ClientLayout() {
  const buttons = [
    {
      value: "urgent",
      label: "Urgent",
    },
    {
      value: "all",
      label: "All",
    },
  ];
  const [value, setValue] = useState("urgent");
  const [searchQuery, setSearchQuery] = useState("");
  const setFilter = useClientStore((s) => s.setFilter);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Client Details",
          headerTitle: () => (
            <View>
              <Searchbar
                style={{
                  backgroundColor: colors.light_gray,
                  marginHorizontal: "auto",
                }}
                iconColor="black"
                placeholder="Search client & phonebook..."
                onChangeText={setSearchQuery}
                value={searchQuery}
                placeholderTextColor="#999"
                inputStyle={{ color: "#000" }}
                theme={{ roundness: 2 }}
              />
              <SegmentedButtons
                value={value}
                onValueChange={setValue}
                style={{
                  borderRadius: 0,
                  borderWidth: 0,
                  elevation: 0,
                }}
                theme={{
                  roundness: 0,
                }}
                buttons={buttons.map((btn) => ({
                  ...btn,
                  onPress: () => {
                    setFilter(btn.value as ClientLevelPriority);
                  },
                  style: {
                    borderRadius: 0,
                    borderWidth: 0,
                    borderBottomWidth: btn.value === value ? 2 : 0,
                    borderBottomColor:
                      btn.value === value ? "#6200EE" : "transparent",
                    backgroundColor: "transparent",
                  },
                  labelStyle: {
                    color: btn.value === value ? "#6200EE" : "#000",
                    fontWeight: btn.value === value ? "bold" : "normal",
                  },
                }))}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen name="sample" />
    </Stack>
  );
}
