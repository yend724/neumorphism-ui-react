import React, { useState } from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const accordionStyle = (theme: Theme) => css`
  position: relative;
  padding: 6px 8px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px ${theme.color.shadow.dark},
    -5px -5px 10px ${theme.color.shadow.light};
  overflow: hidden;
`;
const itemStyle = css`
  position: relative;
`;
const itemTitleStyle = css`
  position: relative;
  padding: 1em 1.2em;
  box-sizing: border-box;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #000;
    margin: auto 0;
  }
  &::before {
    width: 16px;
    height: 2px;
    right: 9px;
  }
  &::after {
    width: 2px;
    height: 16px;
    right: 16px;
  }
`;
const itemTitleStyleClose = css`
  &::after {
    opacity: 0;
  }
`;
const itemTextWrapStyle = css`
  padding: 0;
`;
const itemTextStyle = (theme: Theme) => css`
  position: relative;
  padding: 1em 1.2em;
  border-radius: 3px;
  background: ${theme.color.background.main};
  box-shadow: inset 3px 3px 8px ${theme.color.shadow.dark},
    inset -3px -3px 8px ${theme.color.shadow.light};
`;
const closedItemTextStyle = css`
  display: none;
`;

type AccordionItemProps = {
  title: string;
  text: string;
};
const AccordionItem: React.FC<AccordionItemProps> = ({ title, text }) => {
  const [close, setClose] = useState(true);

  const toggle = () => {
    setClose((pre) => !pre);
  };

  return (
    <div css={itemStyle}>
      <div
        css={[itemTitleStyle, !close && itemTitleStyleClose]}
        onClick={toggle}
      >
        {title}
      </div>
      <div css={itemTextWrapStyle}>
        <p css={[itemTextStyle, close && closedItemTextStyle]}>{text}</p>
      </div>
    </div>
  );
};

type AccordionProps = {
  children?: React.ReactNode;
} & StyleBase;
const Accordion: React.FC<AccordionProps> & {
  Item: typeof AccordionItem;
} = ({ children, _css }) => {
  return <div css={[accordionStyle, _css]}>{children}</div>;
};

Accordion.Item = AccordionItem;

export default Accordion;
