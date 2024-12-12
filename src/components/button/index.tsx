/**~
 * IMPORTS
 */
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from "react-native";

import { IconProps as TableIconProps } from "@tabler/icons-react-native";
import { styles } from "./styles";
import { colors } from "@/styles/theme";

type IButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

/**~
 * COMPONENT
 */
export function Button({
  children,
  style,
  isLoading = false,
  ...rest
}: IButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      style={[styles.container, style]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.gray[100]} size={"small"} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

type IconProps = {
  icon: React.ComponentType<TableIconProps>;
};

function IconButton({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>;
}

Button.Icon = IconButton;

Button.Title = Title;
