/**~
 * IMPORTS
 */
import { useCallback, useEffect, useState } from "react";

import { View, Alert } from "react-native";

import { Api } from "@/services/api/api";

import { Categories } from "@/components/categories";
import { IPlacePops } from "@/components/place";
import { Places } from "@/components/places";

export type ICategory = {
  id: string;
  name: string;
};

type MarketsProps = IPlacePops;
/**~
 * COMPONENT
 */
export default function Home() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [category, setCategory] = useState("");

  const [markets, setMarkets] = useState<MarketsProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await Api.get<ICategory[]>("/categories");
      setCategories(data ?? []);
      setCategory(data[0].id);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.");
    }
  }

  const fecthMarkets = useCallback(
    async function fecthMarkets() {
      try {
        if (!category) return;
        const { data } = await Api.get("/markets/category/" + category);
        setMarkets(data ?? []);
      } catch (error) {
        console.error("Failed to fetch locals:", error);
        Alert.alert("Locais", "Não foi possível carregar os locais.");
      }
    },
    [category]
  );

  /**
   * Ao montar a tela - categorias
   */
  useEffect(() => {
    fetchCategories();
  }, []);

  /**
   * Ao montar a tela - lugares
   */
  useEffect(() => {
    fecthMarkets();
  }, [category]);
  return (
    <View style={{ flex: 1, backgroundColor: "#c3c3c3" }}>
      <Categories
        data={categories}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />

      <Places data={markets} />
    </View>
  );
}
