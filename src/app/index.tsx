/**
 * IMPORTS
 */
import { router } from "expo-router";

import { Welcome } from "@/components/welcome";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />

      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 40,
  },
});
