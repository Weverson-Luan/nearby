/**~
 * IMPORTS
 */
import { ActivityIndicator, View } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme";

/**~
 * COMPONENT
 */
export function Loading() {
  return (
    <ActivityIndicator
      size="small"
      color={colors.green.base}
      style={styles.container}
    />
  );
}
