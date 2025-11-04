import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

import { useAuthStore } from "@/src/store";
import { Text } from "react-native";

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
  header?: boolean;
}[] = [
  { name: "clients", headerTitle: "Clients", icon: "users", header: false },
  { name: "content", headerTitle: "Content", icon: "newspaper-o" },
  { name: "activities", headerTitle: "Activities", icon: "line-chart" },
  { name: "follow-up", headerTitle: "Follow Up", icon: "calendar" },
  { name: "account", headerTitle: "Account", icon: "user" },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const user = useAuthStore((s) => s.user);

  if (!user) return <Redirect href={"/(auth)/login"} />;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].gold,
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
            title: tabScreen.headerTitle,
            headerShown: tabScreen.header ?? true,
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
