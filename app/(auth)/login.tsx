import { useAuthStore } from "@/store";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  const { login, user } = useAuthStore();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.replace("/(tabs)/clients");
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
