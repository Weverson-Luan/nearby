/**~
 * IMPORTS
 */
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme";

/**~
 * COMPONENTE DE BOAS VINDAS
 */
export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Boas vindas ao Nearby!</Text>

      <Text style={styles.subTitle}>
        Tenha cupons de vantagem para usar em {"\n"} seus estabelecimentos
        favoritos.
      </Text>
    </View>
  );
}
