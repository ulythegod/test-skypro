import type { FC } from "react";
import { StyledButton, StyledHeader, StyledMenu } from "./styles";
import { menuItems } from "./consts";

export const LayoutHeader: FC = () => {
  return <StyledHeader>
    <img 
      width={143.68}
      alt="basic"
      src="/icon.png"
    />
    <StyledMenu
      mode="horizontal"
      items={menuItems}
    />
    <StyledButton type="text">Выйти</StyledButton>
  </StyledHeader>;
};
