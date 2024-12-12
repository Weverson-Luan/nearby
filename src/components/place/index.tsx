/**~
 * IMPORTS
 */
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme";
import { IconTicket } from "@tabler/icons-react-native";

export type IPlacePops = {
  id: string;
  name: string;
  description: string;
  cupons: string;
  cover: string;
  address: string;
};

type IProps = TouchableOpacityProps & {
  data: IPlacePops;
};
/**~
 * COMPONENT
 */
export function Place({ data, ...rest }: IProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={{ uri: data.cover }} />

      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.ticktes}>{data.cupons} Cupons disponiveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
