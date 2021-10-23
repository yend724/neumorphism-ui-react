import React from "react";
import { Global, css, Theme } from "@emotion/react";

const global = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap");
  html,
  body {
    width: 100%;
    height: 100%;
    background-color: ${theme.color.background.main};
    font-family: "Roboto", "Noto Sans JP", sans-serif;
    font-weight: 400;
    letter-spacing: 0.04em;
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;
const GlobalStyles: React.FC = () => {
  return <Global styles={global} />;
};

export default GlobalStyles;
