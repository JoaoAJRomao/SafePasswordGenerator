'use client';
import { Button, Card, Slider } from "antd";
import { generatePassword } from "@/utilities/generatePassword";
import React from "react";
import { CopyOutlined } from "@ant-design/icons";

export default function Home() {

  const [pwd, setPwd] = React.useState("Generate a password");
  const [pwdLength, setPwdLength] = React.useState(16);
  const [capital, setCapital] = React.useState(true);
  const [lowercase, setLowercase] = React.useState(true);
  const [numbers, setNumbers] = React.useState(true);
  const [symbols, setSymbols] = React.useState(true);

  return (
    <div style={containerStyle} >
      <h2 style={titleStyle}>Generate a password by clicking the button</h2>

      <Card style={pwdCardStyle}>
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

      <Button
        type="primary"
        style={btnGenerateStyle}
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
      <div>
        <Button onClick={() => setCapital(!capital)} style={capital ? greenLight : redLight}>Include capital letters?</Button>
        <Button onClick={() => setLowercase(!lowercase)} style={lowercase ? greenLight : redLight}>Include lowercase letters?</Button>
      </div>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Button onClick={() => setNumbers(!numbers)} style={numbers ? greenLight : redLight}>Include numbers?</Button>
        <Button onClick={() => setSymbols(!symbols)} style={symbols ? greenLight : redLight}>Include symbols?</Button>
      </div>
      <div className="margin-top" style={pwdLengthStyle}>
        Password length:
        <Slider defaultValue={16} min={12} max={27} style={{ width: 200 }} onChange={setPwdLength} />
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh"
};
const titleStyle: React.CSSProperties = { marginBottom: 20 };
const pwdCardStyle: React.CSSProperties = { width: 300, marginBottom: 10 };
const pwdStyle: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "space-between" };
const btnGenerateStyle: React.CSSProperties = { marginBottom: 10 };
const iconStyle: React.CSSProperties = { fontSize: 20, cursor: "pointer", marginLeft: 8 };
const greenLight: React.CSSProperties = { backgroundColor: "green", borderColor: "green", color: "white" };
const redLight: React.CSSProperties = { backgroundColor: "red", borderColor: "red", color: "white" };
const pwdLengthStyle: React.CSSProperties = { border: "2px solid white", borderRadius: 5, borderWidth: 1, padding: 10 };