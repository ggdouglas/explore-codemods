import React from "react";
import { AnchorButton } from "@blueprintjs/core";

function ExampleA() {
  return <AnchorButton size="small">test</AnchorButton>;
}

function ExampleB() {
  return <AnchorButton size="small">test</AnchorButton>;
}

function ExampleC() {
  return <AnchorButton>test</AnchorButton>;
}

function ExampleD() {
  return <AnchorButton size="large">test</AnchorButton>;
}

function ExampleE() {
  return <AnchorButton size="large">test</AnchorButton>;
}

function ExampleF() {
  return <AnchorButton>test</AnchorButton>;
}

function ExampleG() {
  return <AnchorButton>test</AnchorButton>;
}

function ExampleH() {
  return <AnchorButton size="small">test</AnchorButton>;
}

function ExampleI() {
  const isSmall = true;
  return <AnchorButton size={isSmall ? "small" : undefined}>test</AnchorButton>;
}

function ExampleJ() {
  const isLarge = true;
  return <AnchorButton size={isLarge ? "large" : undefined}>test</AnchorButton>;
}
