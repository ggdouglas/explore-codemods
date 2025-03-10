import React from "react";
import { Button } from "@blueprintjs/core";

function ExampleA() {
  return <Button outlined={true}>test</Button>;
}

function ExampleB() {
  return <Button outlined>test</Button>;
}

function ExampleC() {
  return <Button outlined={false}>test</Button>;
}

function ExampleD() {
  const isOutlined = true;
  return <Button outlined={isOutlined}>test</Button>;
}

function ExampleE() {
  return <Button minimal={true}>test</Button>;
}

function ExampleF() {
  return <Button minimal>test</Button>;
}

function ExampleG() {
  return <Button minimal={false}>test</Button>;
}

function ExampleH() {
  const isMinimal = true;
  return <Button minimal={isMinimal}>test</Button>;
}

function ExampleI() {
  return <Button minimal={true} outlined={true}>test</Button>;
}

function ExampleJ() {
  const isMinimal = true;
  const isOutlined = true;
  return <Button minimal={isMinimal} outlined={isOutlined}>test</Button>;
}

function ExampleK() {
  return <Button minimal={true} outlined={false}>test</Button>;
}
