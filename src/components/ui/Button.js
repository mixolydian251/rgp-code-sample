import React from "react";
import styled from "styled-components";
import theme from "../../style/theme";
import { whenProvided } from "../../style/styleUtils";

const StyledButton = styled.button`
  height: 44px;
  background: ${({ color }) => color};
  color: ${theme.white};
  transition: opacity 100ms linear;
  border: none;
  border-radius: 4px;
  padding: 0 24px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  ${whenProvided("disabled")`
    background: ${theme.primary100}
  `};

  ${whenProvided("outline")`
    background: ${theme.white};
    color: ${({ color }) => color};
    border: solid 2px ${({ color }) => color};
  `};
`;

function Button({
  className,
  onClick,
  disabled,
  children,
  outline,
  color = theme.primary500,
}) {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      disabled={disabled}
      color={color}
      outline={outline}
    >
      {children}
    </StyledButton>
  );
}

export default styled(Button)``;
