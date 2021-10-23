import React from "react";
import { css } from "@emotion/react";

const navStyle = css`
  position: relative;
`;
const listStyle = css`
  display: flex;
  > li:nth-last-of-type(n + 2) {
    margin-right: 16px;
    opacity: 0.5;
    &::after {
      content: "/";
      margin-left: 16px;
    }
  }
`;

type Props = {
  children?: React.ReactNode;
};
const Breadcrumb: React.FC<Props> = ({ children }) => {
  return (
    <nav css={navStyle}>
      <ol css={listStyle}>{children}</ol>
    </nav>
  );
};

export default Breadcrumb;
