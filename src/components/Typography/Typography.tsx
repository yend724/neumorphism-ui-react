import React from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const typoStyle = (theme: Theme) => css`
  font-weight: 600;
  text-shadow: 3px 3px 5px ${theme.color.shadow.dark},
    -3px -3px 5px ${theme.color.shadow.light};
  letter-spacing: 0.1em;
`;

type Props = {
  children?: React.ReactNode;
} & StyleBase;
const Typography: React.FC<Props> = ({ children, _css }) => {
  return <p css={[typoStyle, _css]}>{children}</p>;
};

export default Typography;
