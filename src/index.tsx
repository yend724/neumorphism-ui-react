import React from "react";
import ReactDOM from "react-dom";
import "destyle.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "@/styles/GlobalStyles";
import View from "@/View";
import { createTheme } from "@/utils/createTheme";
import { calcColorLuminance } from "@/utils/color";
import { defaultTheme } from "@/constants/theme/defaultTheme";

const themeOptions = {
  color: {
    ...defaultTheme.color,
    background: {
      light: calcColorLuminance(defaultTheme.color.background.main, 0.1),
      main: defaultTheme.color.background.main,
      dark: calcColorLuminance(defaultTheme.color.background.main, -0.1),
    },
    shadow: {
      light: calcColorLuminance(defaultTheme.color.background.main, 0.15),
      dark: calcColorLuminance(defaultTheme.color.background.main, -0.15),
    },
  },
};
export const theme = createTheme<typeof themeOptions>(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <View />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
