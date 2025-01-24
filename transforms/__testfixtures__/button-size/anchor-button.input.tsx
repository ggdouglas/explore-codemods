import React from "react";
import { AnchorButton } from "@blueprintjs/core";

function ExampleA() {
  return <AnchorButton small={true}>test</AnchorButton>;
}

function ExampleB() {
  return <AnchorButton small>test</AnchorButton>;
}

function ExampleC() {
  return <AnchorButton small={false}>test</AnchorButton>;
}

function ExampleD() {
  return <AnchorButton large={true}>test</AnchorButton>;
}

function ExampleE() {
  return <AnchorButton large>test</AnchorButton>;
}

function ExampleF() {
  return <AnchorButton large={false}>test</AnchorButton>;
}

function ExampleG() {
  return <AnchorButton>test</AnchorButton>;
}

function ExampleH() {
  return <AnchorButton small={true} large={true}>test</AnchorButton>;
}
