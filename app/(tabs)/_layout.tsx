import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { Text } from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

const tabScreens: {
  name: string;
  headerTitle: string;
  icon: string;
}[] = [
  { name: "clients", headerTitle: "Clients", icon: "users" },
  { name: "content", headerTitle: "Content", icon: "newspaper-o" },
  { name: "activities", headerTitle: "Activities", icon: "line-chart" },
  { name: "follow-up", headerTitle: "Follow Up", icon: "calendar" },
  { name: "account", headerTitle: "Account", icon: "user" },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].gold,
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: Colors["light"].royalBlue,
        },
        tabBarInactiveTintColor: "#fff",
      }}
    >
      {tabScreens.map((tabScreen, index) => (
        <Tabs.Screen
          name={tabScreen.name}
          options={{
            headerStyle: {},
            title: tabScreen.headerTitle,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={tabScreen.icon as any} color={color} />
            ),
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {tabScreen.headerTitle}
              </Text>
            ),
          }}
          key={`${tabScreen.name}-${index}`}
        />
      ))}
    </Tabs>
  );
}
