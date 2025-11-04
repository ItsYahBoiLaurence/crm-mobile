import ScreenContainer from "@/src/components/ScreenContainer";
import { useClientStore } from "@/src/store/useClientStore";
import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { ClientInformationType } from "@/src/types/client";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, FAB, IconButton, Surface } from "react-native-paper";

export default function IndexPage() {
  const router = useRouter();
  const { getFilteredClients, filterByType } = useClientStore();

  const [clients, setClients] = useState<ClientInformationType[]>([]);

  useEffect(() => {
    setClients(getFilteredClients());
  }, [getFilteredClients, filterByType]);

  return (
    <ScreenContainer>
      <ScrollView>
        <View style={styles.cardContainer}>
          {clients.map((client) => (
            <View key={client.name} style={styles.card}>
              <View style={styles.cardActions}>
                {!client.reached ? (
                  <View style={styles.cardButtons}>
                    <IconButton
                      mode="contained"
                      icon="phone"
                      iconColor="white"
                      containerColor={colors.royalBlue}
                    />
                    <IconButton
                      mode="contained"
                      icon="message"
                      iconColor="white"
                      containerColor={colors.royalBlue}
                    />
                  </View>
                ) : (
                  <Avatar.Text
                    size={45}
                    label={client.name[0]}
                    style={{ backgroundColor: colors.royalBlue }}
                  />
                )}
              </View>
              <View style={styles.cardTextContainer}>
                {!client.reached && (
                  <Surface style={styles.tag}>
                    <Text>Uncontacted</Text>
                  </Surface>
                )}
                <Text style={styles.cardText}>{client.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <FAB
        icon="plus"
        theme={{ colors: { text: "white" } }}
        style={styles.fab}
        onPress={() => router.push("/(tabs)/clients/new-client")}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginBottom: spacing.md,
    marginRight: spacing.md,
    backgroundColor: colors.royalBlue,
  },
  cardContainer: {
    padding: spacing.md,
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
  },
  card: {
    padding: spacing.md,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    flexBasis: 100,
    justifyContent: "flex-end",
  },

  cardText: {
    fontSize: typography.subtitle,
    fontWeight: 600,
  },
  tag: {
    backgroundColor: colors.pink,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: 10,
  },
  cardTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: spacing.xs,
  },

  cardButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
