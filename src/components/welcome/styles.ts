/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 28,
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
});
