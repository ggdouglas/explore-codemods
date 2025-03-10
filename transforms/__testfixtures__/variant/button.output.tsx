import React from "react";
import { Button } from "@blueprintjs/core";

function ExampleA() {
  return <Button variant="outlined">test</Button>;
}

function ExampleB() {
  return <Button variant="outlined">test</Button>;
}

function ExampleC() {
  return <Button>test</Button>;
}

function ExampleD() {
  const isOutlined = true;
  return <Button variant={isOutlined ? "outlined" : "solid"}>test</Button>;
}

function ExampleE() {
  return <Button variant="minimal">test</Button>;
}

function ExampleF() {
  return <Button variant="minimal">test</Button>;
}

function ExampleG() {
  return <Button>test</Button>;
}

function ExampleH() {
  const isMinimal = true;
  return <Button variant={isMinimal ? "minimal" : "solid"}>test</Button>;
}

function ExampleI() {
  return <Button variant="outlined">test</Button>;
}

function ExampleJ() {
  const isMinimal = true;
  const isOutlined = true;
  return <Button variant={isOutlined ? "outlined" : isMinimal ? "minimal" : "solid"}>test</Button>;
}

function ExampleK() {
  return <Button variant="minimal">test</Button>;
}
