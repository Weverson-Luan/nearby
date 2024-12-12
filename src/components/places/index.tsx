/**~
 * IMPORTS
 */
import { useRef } from "react";

import { Text, useWindowDimensions } from "react-native";

import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { styles } from "./styles";
import { IPlacePops, Place } from "../place";

type IPlacesPops = {
  data: IPlacePops[];
};
/**~
 * COMPONENT
 */
export function Places({ data }: IPlacesPops) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    MIN: 278,
    MAX: dimensions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.MIN, snapPoints.MIN]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Place data={item} />}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
