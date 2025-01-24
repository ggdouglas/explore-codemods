import React from "react";
import { Button } from "@blueprintjs/core";

function ExampleA() {
  return <Button small={true}>test</Button>;
}

function ExampleB() {
  return <Button small>test</Button>;
}

function ExampleC() {
  return <Button small={false}>test</Button>;
}

function ExampleD() {
  return <Button large={true}>test</Button>;
}

function ExampleE() {
  return <Button large>test</Button>;
}

function ExampleF() {
  return <Button large={false}>test</Button>;
}

function ExampleG() {
  return <Button>test</Button>;
}

function ExampleH() {
  return <Button small={true} large={true}>test</Button>;
}
