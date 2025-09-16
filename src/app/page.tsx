"use client";
import { Button, Card, Row, Slider } from "antd";
import { generatePassword } from "@/utilities/generatePassword";
import React from "react";
import { CopyOutlined } from "@ant-design/icons";
import { SiNextdotjs } from "react-icons/si";
import { Checkbox } from "antd";

export default function Home() {
  const [pwd, setPwd] = React.useState("Generate a password");
  const [pwdLength, setPwdLength] = React.useState(16);
  const [capital, setCapital] = React.useState(true);
  const [lowercase, setLowercase] = React.useState(true);
  const [numbers, setNumbers] = React.useState(true);
  const [symbols, setSymbols] = React.useState(true);

  return (
    <div style={pageStyle}>
      <div style={cardContainerStyle}>
        <div style={cardTitleStyle}>
          <h2 style={titleStyle}>Password Generator</h2>
          <div style={iconNextStyle}>
            <span style={spanIconNext}>
              <SiNextdotjs size={32} color="#fff" />
            </span>
            <h2 style={titleStyle}>Next.js</h2>
          </div>
        </div>

        <Card style={pwdBoxStyle}>
          <div style={pwdStyle}>
            <p>{pwd}</p>
            <CopyOutlined
              style={iconStyle}
              onClick={() => {
                navigator.clipboard.writeText(pwd);
              }}
              title="Copy password"
            />
          </div>
        </Card>

        <div style={pwdLengthStyle}>
          <span>Character length:</span>
          <div style={divSliderStyle}>
            <Slider
              defaultValue={16}
              min={12}
              max={27}
              style={{ width: '100%' }}
              onChange={setPwdLength}
              tooltip={{ formatter: null }}
            />
          </div>
          <span>{pwdLength} to 27</span>
        </div>

        <Row style={checkboxStyle}>
          <Checkbox
            checked={capital}
            onChange={(e) => setCapital(e.target.checked)}
          >
            Capital letters
          </Checkbox>
          <Checkbox
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          >
            Lowercase letters
          </Checkbox>
          <Checkbox
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          >
            Numbers
          </Checkbox>
          <Checkbox
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          >
            Symbols
          </Checkbox>
        </Row>

        <Button
          type="primary"
          style={btnGeneratePwdStyle}
          onClick={() => {
            if (!capital && !lowercase && !numbers && !symbols) {
              setPwd("Please select at least one option");
            } else {
              setPwd(
                generatePassword(pwdLength, {
                  uppercase: capital,
                  lowercase: lowercase,
                  numbers: numbers,
                  symbols: symbols,
                })
              );
            }
          }}
        >
          Generate password
        </Button>
      </div>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#a0a0a0ff",
};
const cardContainerStyle: React.CSSProperties = {
  width: "60%",
  backgroundColor: "#e6e6e6ff",
  padding: 20,
  borderRadius: 10,
  minWidth: 340,
};
const titleStyle: React.CSSProperties = { marginTop: 5, color: "black" };
const cardTitleStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  marginBottom: 40,
};
const iconNextStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: 10,
};
const spanIconNext: React.CSSProperties = {
  background: "#2855e9ff",
  borderRadius: "60%",
  padding: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const pwdBoxStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: 40,
  minHeight: 60,
};
const pwdStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const btnGeneratePwdStyle: React.CSSProperties = {
  marginBottom: 10,
  width: "100%",
  height: 50,
  fontSize: 20,
};
const iconStyle: React.CSSProperties = {
  fontSize: 20,
  cursor: "pointer",
  marginLeft: 8,
};
const pwdLengthStyle: React.CSSProperties = {
  border: "2px solid black",
  borderRadius: 5,
  borderWidth: 1,
  padding: 10,
  marginBottom: 20,
  color: "black",
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
  gap: 10,
};
const divSliderStyle: React.CSSProperties = { flex: 1, paddingRight: 10 };
const checkboxStyle: React.CSSProperties = {
  flexDirection: "column",
  display: "flex",
  gap: 8,
  marginBottom: 30,
};
