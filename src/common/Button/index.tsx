import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, type, disabled }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} type={type} disabled={disabled}>
    {children}
  </StyledButton>
);
