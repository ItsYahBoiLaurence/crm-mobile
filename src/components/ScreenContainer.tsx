import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenContainer({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
}
