import React from "react";
import { Button } from "@blueprintjs/core";

function ExampleA() {
  return <Button size="small">test</Button>;
}

function ExampleB() {
  return <Button size="small">test</Button>;
}

function ExampleC() {
  return <Button>test</Button>;
}

function ExampleD() {
  return <Button size="large">test</Button>;
}

function ExampleE() {
  return <Button size="large">test</Button>;
}

function ExampleF() {
  return <Button>test</Button>;
}

function ExampleG() {
  return <Button>test</Button>;
}

function ExampleH() {
  return <Button size="small">test</Button>;
}

function ExampleI() {
  const isSmall = true;
  return <Button size={isSmall ? "small" : undefined}>test</Button>;
}

function ExampleJ() {
  const isLarge = true;
  return <Button size={isLarge ? "large" : undefined}>test</Button>;
}
