import React from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const lineStyle = (theme: Theme) => css`
  height: 6px;
  border: none;
  background: ${theme.color.background.main};
  box-shadow: inset 1px 1px 2px ${theme.color.shadow.dark},
    inset -1px -1px 2px ${theme.color.shadow.light};
`;

type Props = {} & StyleBase;
const Line: React.FC<Props> = ({ _css }) => {
  return <hr css={[lineStyle, _css]} />;
};

export default Line;
