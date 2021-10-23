import React from "react";
import { css, Theme } from "@emotion/react";
import { StyleBase } from "@/system/style/_css";

const inputStyle = (theme: Theme) => css`
  padding: 1em 1.2em;
  border-radius: 10px;
  background: ${theme.color.background.main};
  box-shadow: inset 5px 5px 5px ${theme.color.shadow.dark},
    inset -5px -5px 5px ${theme.color.shadow.light};
`;

type Props = React.ComponentPropsWithoutRef<"input"> & StyleBase;
const InputText: React.FC<Props> = ({ _css, ...others }) => {
  return (
    <div>
      <input {...others} css={[inputStyle, _css]} type="text" />
    </div>
  );
};

export default InputText;
