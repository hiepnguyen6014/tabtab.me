import { styled, theme } from "@styles/theme";
import { Button as AntButton } from "antd";

export const StyledButton = styled((props) => <AntButton {...props} />)`
  background-color: ${theme.colors.common};
`;
