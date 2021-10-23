import React, { useState } from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const rootStyle = css`
  position: relative;
  display: inline-block;
`;
const labelStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  vertical-align: bottom;
`;
const inputWrapStyle = css`
  display: flex;
  align-items: center;
`;
const inputStyle = css`
  position: absolute;
  opacity: 0;
  visibility: hidden;
`;
const btnStyle = (theme: Theme) => css`
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  background: ${theme.color.background.main};
  box-shadow: inset 1px 1px 2px ${theme.color.shadow.dark},
    inset -1px -1px 2px ${theme.color.shadow.light};
  border-radius: 50%;
`;
const onBtnStyle = (theme: Theme) => css`
  &::before {
    content: "";
    position: absolute;
    top: 0.25em;
    left: 0.25em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: ${theme.color.info};
  }
`;
const textStyle = css`
  padding-left: 8px;
`;

type ButtonProps = {
  name: string;
  value: string | number;
  selected: string | number;
  label?: string;
  onChange: any;
} & React.ComponentPropsWithoutRef<"input"> &
  StyleBase;
const RadioButton: React.FC<ButtonProps> = ({
  _css,
  name,
  label,
  value,
  selected,
  ...others
}) => {
  return (
    <div css={[rootStyle, _css]}>
      <label css={labelStyle}>
        <span css={inputWrapStyle}>
          <input
            css={inputStyle}
            type="radio"
            name={name}
            value={value}
            {...others}
          />
          <span css={[btnStyle, value === selected && onBtnStyle]}></span>
        </span>
        {label && <span css={textStyle}>{label}</span>}
      </label>
    </div>
  );
};

type GroupProps = {} & StyleBase;
const RadioGoup: React.FC<GroupProps> = () => {
  const [currentValue, setCurrentValue] = useState("");
  const onChange = (e: any) => {
    setCurrentValue(e.currentTarget.value);
  };

  return (
    <div>
      <RadioButton
        name="group1"
        value="v1"
        selected={currentValue}
        label="label 1"
        onChange={onChange}
      />
      <RadioButton
        name="group1"
        value="v2"
        label="label 2"
        selected={currentValue}
        onChange={onChange}
        _css={css`
          margin-left: 16px;
        `}
      />
    </div>
  );
};
export default RadioGoup;
