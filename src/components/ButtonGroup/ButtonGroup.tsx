import React from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const buttonGroupStyle = css`
  display: inline-block;
`;
const buttonGroupContainerStyle = (theme: Theme) => css`
  display: flex;
  border-radius: 5px;
  background: ${theme.color.background.main};
  box-shadow: 5px 5px 10px ${theme.color.shadow.dark},
    -5px -5px 10px ${theme.color.shadow.light};
  overflow: hidden;
`;
const buttonStyle = (theme: Theme) => css`
  position: relative;
  padding: 0.8em 1em;
  &:nth-of-type(n + 2) {
    margin-left: 4px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      height: 100%;
      width: 4px;
      background: ${theme.color.background.main};
      box-shadow: inset 1px 0px 2px ${theme.color.shadow.dark},
        inset -1px 0px 2px ${theme.color.shadow.light};
    }
  }
  &:hover {
    background: linear-gradient(
      145deg,
      ${theme.color.shadow.dark},
      ${theme.color.shadow.light}
    );
  }
`;
type ButtonProps = {
  children?: React.ReactNode;
};
const Button: React.FC<ButtonProps & React.ComponentPropsWithoutRef<"button">> =
  ({ children, ...others }) => {
    return (
      <button {...others} css={buttonStyle}>
        {children}
      </button>
    );
  };

type ButtonGroupProps = {
  children?: React.ReactNode;
} & StyleBase;
const ButtonGroup: React.FC<ButtonGroupProps> & {
  Button: typeof Button;
} = ({ children, _css }) => {
  return (
    <div css={[buttonGroupStyle, _css]}>
      <div css={buttonGroupContainerStyle}>{children}</div>
    </div>
  );
};

ButtonGroup.Button = Button;

export default ButtonGroup;
