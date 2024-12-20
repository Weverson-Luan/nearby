/**~
 * IMPORTS
 */
import { View, Text } from "react-native";

import { styles } from "./styles";
import React from "react";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

interface IStepProps {
  title: string;
  description: string;
  icon?: React.ComponentType<IconProps>;
}

/**~
 * COMPONENT STEP
 */
export function Step({ title, description, icon: Icon }: IStepProps) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
