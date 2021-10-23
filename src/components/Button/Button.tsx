import React from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const buttonStyle = (theme: Theme) => css`
  border-radius: 30px;
  background: ${theme.color.background.main};
  box-shadow: 5px 5px 10px ${theme.color.shadow.dark},
    -5px -5px 10px ${theme.color.shadow.light};
  padding: 1em 2em;
  &:hover {
    box-shadow: inset 5px 5px 10px ${theme.color.shadow.dark},
      inset -5px -5px 10px ${theme.color.shadow.light};
  }
`;

type Props = {
  children?: React.ReactNode;
} & StyleBase;
const Button: React.FC<Props & React.ComponentPropsWithoutRef<"button">> = ({
  children,
  ...others
}) => {
  return (
    <button {...others} css={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
