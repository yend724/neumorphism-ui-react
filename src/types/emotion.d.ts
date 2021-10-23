import { theme } from "@/index";
type MyTheme = typeof theme;
declare module "@emotion/react" {
  export interface Theme extends MyTheme {}
}
