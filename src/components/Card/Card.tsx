import React from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const cardStyle = css`
  border-radius: 5px;
  padding: 1em;
`;
const flatStyle = (theme: Theme) => css`
  background: ${theme.color.background.main};
  box-shadow: 5px 5px 10px ${theme.color.shadow.dark},
    -5px -5px 10px ${theme.color.shadow.light};
`;
const concaveStyle = (theme: Theme) => css`
  background: linear-gradient(
    145deg,
    ${theme.color.background.dark},
    ${theme.color.background.light}
  );
  box-shadow: 5px 5px 10px ${theme.color.shadow.dark},
    -5px -5px 10px ${theme.color.shadow.light};
`;
const convexStyle = (theme: Theme) => css`
  background: linear-gradient(
    145deg,
    ${theme.color.background.light},
    ${theme.color.background.dark}
  );
  box-shadow: 5px 5px 10px ${theme.color.shadow.dark},
    -5px -5px 10px ${theme.color.shadow.light};
`;
const pressedStyle = (theme: Theme) => css`
  background: ${theme.color.background.main};
  box-shadow: inset 5px 5px 10px ${theme.color.shadow.dark},
    inset -5px -5px 10px ${theme.color.shadow.light};
`;

const shapeStyle = {
  flat: flatStyle,
  concave: concaveStyle,
  convex: convexStyle,
  pressed: pressedStyle,
};

type Props = {
  children?: React.ReactNode;
  shape?: "flat" | "concave" | "convex" | "pressed";
} & StyleBase;
const Card: React.FC<Props> = ({ children, shape = "flat", _css }) => {
  return <div css={[cardStyle, shapeStyle[shape], _css]}>{children}</div>;
};

export default Card;
