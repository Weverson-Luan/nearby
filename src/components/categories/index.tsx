/**~
 * IMPORTS
 */
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme";
import { Category } from "../category";
import { ICategory } from "@/app/home";

type IProps = {
  data: ICategory[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
};

/**~
 * COMPONENT
 */
export function Categories({
  data,
  selectedCategory,
  onSelectCategory,
}: IProps) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => (
        <Category
          onPress={() => onSelectCategory(item.id)}
          name={item.name}
          iconId={item.id}
          isSelected={item.id === selectedCategory}
        />
      )}
    />
  );
}
