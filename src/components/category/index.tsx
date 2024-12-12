/**~
 * IMPORTS
 */
import { Text, Pressable, PressableProps } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme";
import { categoriesIcons } from "@/utils/categories-icons";

type ICategoryProps = PressableProps & {
  name: string;
  iconId: string;
  isSelected?: boolean;
};

/**~
 * COMPONENT
 */
export function Category({
  iconId,
  name,
  isSelected = false,
  ...rest
}: ICategoryProps) {
  const Icon = categoriesIcons[iconId];

  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  );
}
