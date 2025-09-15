'use client';
import { Button, Card, Slider } from "antd";
import { generatePassword } from "@/utilities/generatePassword";
import React from "react";
import { CopyOutlined } from "@ant-design/icons";

export default function Home() {

  const [pwd, setPwd] = React.useState("Generate a password");
  const [pwdLength, setPwdLength] = React.useState(12);
  const [capital, setCapital] = React.useState(true);
  const [lowercase, setLowercase] = React.useState(true);
  const [numbers, setNumbers] = React.useState(true);
  const [symbols, setSymbols] = React.useState(true);
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // full viewport height
      }}
    >
      Generate a password by clicking the button below
      <Card style={{ width: 300, }}>
        <p>{pwd}</p>
        <CopyOutlined />
      </Card>
      <Button
        type="primary"
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
        <Button onClick={() => setCapital(!capital)} style={{ backgroundColor: capital ? "green" : "red" }}>Include capital letters?</Button>
        <Button onClick={() => setLowercase(!lowercase)} style={{ backgroundColor: lowercase ? "green" : "red" }}>Include lowercase letters?</Button>
      </div>
      <div>
        <Button onClick={() => setNumbers(!numbers)} style={{ backgroundColor: numbers ? "green" : "red" }}>Include numbers?</Button>
        <Button onClick={() => setSymbols(!symbols)} style={{ backgroundColor: symbols ? "green" : "red" }}>Include symbols?</Button>
      </div>
      <div className="margin-top">
        Password length:
        <Slider defaultValue={30} min={12} max={27} style={{ width: 200 }} onChange={setPwdLength} />
      </div>
    </div>
  );
}
