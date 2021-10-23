import React, { useState } from "react";
import ReactDOM from "react-dom";
import { css, Theme } from "@emotion/react";
import Button from "@/components/Button/Button";
import { StyleBase } from "@/system/style/_css";

const modalWrapStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const modalBgStyle = (theme: Theme) => css`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.background.main};
  opacity: 0.8;
`;
const modalContainerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;

type ContentsProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};
const Contents: React.FC<ContentsProps> = ({ onClick, children }) => {
  return (
    <div css={modalWrapStyle}>
      <div onClick={onClick} css={modalBgStyle}></div>
      <div css={modalContainerStyle}>{children}</div>
    </div>
  );
};

type PortalProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};
const Portal: React.FC<PortalProps> = ({ onClick, children }) => {
  const el = document.getElementById("modal") as HTMLDivElement;
  return ReactDOM.createPortal(
    <Contents onClick={onClick} children={children} />,
    el
  );
};

type ModalProps = {
  children: React.ReactNode;
} & StyleBase;
const Modal: React.FC<ModalProps> = ({ children, _css }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div css={_css}>
      <Button onClick={toggle}>modal</Button>
      {open && <Portal onClick={toggle} children={children} />}
    </div>
  );
};

export default Modal;
