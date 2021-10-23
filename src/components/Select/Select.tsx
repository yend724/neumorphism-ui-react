import React from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const rootStyle = (theme: Theme) => css`
  position: relative;
  display: inline-block;
  border-radius: 10px;
  background: ${theme.color.background.main};
  box-shadow: inset 5px 5px 5px ${theme.color.shadow.dark},
    inset -5px -5px 5px ${theme.color.shadow.light};
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 1em;
    bottom: 0;
    margin: auto 0;
    width: 0.6em;
    height: 0.6em;
    border-right: 3px solid;
    border-bottom: 3px solid;
    box-sizing: border-box;
    transform-origin: center center;
    transform: rotate(45deg) translateY(-25%);
  }
`;
const selectStyle = css`
  position: relative;
  padding: 1em 2em 1em 1.2em;
  min-width: 200px;
`;

type Props = {} & StyleBase;
const Select: React.FC<Props> = ({ _css }) => {
  return (
    <div css={[rootStyle, _css]}>
      <select css={selectStyle}>
        <option value="1">test1</option>
        <option value="2">test2</option>
        <option value="3">test3</option>
      </select>
    </div>
  );
};

export default Select;
