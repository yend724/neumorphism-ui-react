import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "./components/Typography/Typography";
import Button from "@/components/Button/Button";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Card from "@/components/Card/Card";
import Badge from "./components/Badge/Badge";
import InputText from "@/components/InputText/InputText";
import InputCheckbox from "@/components/InputCheckbox/InputCheckbox";
import RadioGroup from "@/components/RadioGroup/RadioGoup";
import Select from "@/components/Select/Select";
import Accordion from "./components/Accordion/Accordion";
import Modal from "@/components/Modal/Modal";
import Line from "@/components/Line/Line";

const wrapperStyle = css`
  width: 100%;
  min-height: 100%;
  padding: 64px;
  box-sizing: border-box;
`;
const blockStyle = css`
  margin-top: 40px;
`;
const flexStyle = css`
  display: flex;
`;
const itemStyle = css`
  &:nth-of-type(n + 2) {
    margin-left: 30px;
  }
`;
const View: React.FC = () => {
  const [inputText, setInputText] = useState("InputText");
  const onInputTextChange = (e: any) => {
    setInputText(e.currentTarget.value);
  };

  return (
    <div css={wrapperStyle}>
      <div>
        <Typography
          _css={css`
            font-size: 28px;
          `}
        >
          Typography
        </Typography>
      </div>
      <div css={blockStyle}>
        <Line />
      </div>
      <div css={[blockStyle, flexStyle]}>
        {(["flat", "concave", "convex", "pressed"] as const).map((shape) => (
          <div key={shape} css={itemStyle}>
            <Card shape={shape}>{shape}</Card>
          </div>
        ))}
      </div>
      <div css={[blockStyle, flexStyle]}>
        {(["info", "error", "warning", "success"] as const).map((t) => (
          <div key={t} css={itemStyle}>
            <Badge type={t}>{t.toUpperCase()}</Badge>
          </div>
        ))}
      </div>
      <div css={blockStyle}>
        <Line />
      </div>
      <div css={blockStyle}>
        <Button>Button</Button>
      </div>
      <div css={blockStyle}>
        <ButtonGroup>
          <ButtonGroup.Button>Left</ButtonGroup.Button>
          <ButtonGroup.Button>Center</ButtonGroup.Button>
          <ButtonGroup.Button>Right</ButtonGroup.Button>
        </ButtonGroup>
      </div>
      <div css={blockStyle}>
        <Line />
      </div>
      <div css={blockStyle}>
        <InputCheckbox />
      </div>
      <div css={blockStyle}>
        <RadioGroup />
      </div>
      <div css={blockStyle}>
        <InputText onChange={onInputTextChange} value={inputText} />
      </div>
      <div css={blockStyle}>
        <Select />
      </div>
      <div css={blockStyle}>
        <Line />
      </div>
      <div css={blockStyle}>
        <Accordion>
          <Accordion.Item title="Title 1" text="Sample text." />
          <Accordion.Item title="Title 2" text="Sample text." />
          <Accordion.Item title="Title 3" text="Sample text." />
        </Accordion>
      </div>
      <div css={blockStyle}>
        <Line />
      </div>
      <div css={blockStyle}>
        <Breadcrumb>
          <li>First</li>
          <li>Second</li>
          <li>Last</li>
        </Breadcrumb>
      </div>
      <div css={blockStyle}>
        <Line />
      </div>
      <div css={blockStyle}>
        <Modal>
          <Card>Modal Card</Card>
        </Modal>
      </div>
    </div>
  );
};

export default View;
