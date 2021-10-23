import React, { useState } from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const labelStyle = css`
  position: relative;
  display: inline-block;
  padding: 0.5em 0;
  cursor: pointer;
`;
const hiddenInputStyle = css`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  height: 0;
`;
const checkboxStyle = (theme: Theme) => css`
  position: absolute;
  top: 0;
  bottom: 2px;
  margin: auto 0;
  width: 20px;
  height: 20px;
  background-color: ${theme.color.background.main};
  box-shadow: inset 2px 2px 2px ${theme.color.shadow.dark},
    inset -2px -2px 2px ${theme.color.shadow.light};
`;
const onCheckboxStyle = css`
  &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 12px;
    height: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid #000;
    border-left: 3px solid #000;
    transform-origin: center;
    transform: rotate(-45deg);
  }
`;
const textStyle = css`
  padding-left: 28px;
`;
type Props = {} & StyleBase;
const InputCheckbox: React.FC<Props> = ({ _css }) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked((pre) => !pre);
  };
  return (
    <label className="hover" css={[labelStyle, _css]}>
      <input
        css={hiddenInputStyle}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <div css={[checkboxStyle, checked && onCheckboxStyle]}></div>
      <span css={textStyle}>Check Box</span>
    </label>
  );
};

export default InputCheckbox;
