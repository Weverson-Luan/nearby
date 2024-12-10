/**
 * IMPORTS
 */
import { Welcome } from "@/components/welcome";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Steps } from "@/components/steps";

export default function Index() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
      <StatusBar style="auto" />
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
