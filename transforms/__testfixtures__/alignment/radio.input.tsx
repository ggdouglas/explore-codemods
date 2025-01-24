import React from "react";
import { Alignment, Radio } from "@blueprintjs/core";

function ExampleA() {
  return (<Radio alignIndicator={Alignment.LEFT} />);
}

function ExampleB() {
  return (<Radio alignIndicator={Alignment.RIGHT} />);
}

function ExampleC() {
  return (<Radio alignIndicator={Alignment.CENTER} />);
}

function ExampleD() {
  return (<Radio alignIndicator="left" />);
}

function ExampleE() {
  return (<Radio alignIndicator="right" />);
}

function ExampleF() {
  return (<Radio alignIndicator="center" />);
}

function ExampleG() {
  return (<Radio />);
}

function ExampleH() {
  return (<Radio alignIndicator={"left"} />);
}

function ExampleI() {
  return (<Radio alignIndicator={"right"} />);
}

function ExampleJ() {
  return (<Radio alignIndicator={"center"} />);
}
