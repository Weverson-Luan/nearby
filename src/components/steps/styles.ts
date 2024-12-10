/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: colors.gray[100]
  },
  title: {
    fontSize: 16,
    // lineHeight: 32,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
