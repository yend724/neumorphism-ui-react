import React from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const infoStyle = (theme: Theme) => css`
  color: ${theme.color.info};
`;
const errorStyle = (theme: Theme) => css`
  color: ${theme.color.error};
`;
const warnigStyle = (theme: Theme) => css`
  color: ${theme.color.warning};
`;
const successStyle = (theme: Theme) => css`
  color: ${theme.color.success};
`;
const badgeStyle = (theme: Theme) => css`
  font-size: 12px;
  font-weight: 600;
  padding: 0.4em 0.8em;
  background-color: ${theme.color.background.main};
  box-shadow: inset 5px 5px 10px ${theme.color.shadow.dark},
    inset -5px -5px 10px ${theme.color.shadow.light};
  border-radius: 100px;
`;

const typeList = {
  info: infoStyle,
  error: errorStyle,
  warning: warnigStyle,
  success: successStyle,
};
type BadgeProps = {
  children?: React.ReactNode;
  type?: keyof typeof typeList;
} & StyleBase;
const Badge: React.FC<BadgeProps> = ({ children, type = "info" }) => {
  const t = typeList[type];
  return <span css={[badgeStyle, t]}>{children}</span>;
};

export default Badge;
