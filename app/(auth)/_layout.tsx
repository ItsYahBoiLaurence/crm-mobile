import { useAuthStore } from "@/src/store";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const user = useAuthStore((s) => s.user);
  if (user) return <Redirect href={"/(tabs)/clients"} />;

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: true, title: "" }} />
    </Stack>
  );
}
