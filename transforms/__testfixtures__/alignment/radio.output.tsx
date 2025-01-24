import React from "react";
import { Alignment, Radio } from "@blueprintjs/core";

function ExampleA() {
  return (<Radio alignIndicator={Alignment.START} />);
}

function ExampleB() {
  return (<Radio alignIndicator={Alignment.END} />);
}

function ExampleC() {
  return (<Radio />);
}

function ExampleD() {
  return (<Radio alignIndicator="start" />);
}

function ExampleE() {
  return (<Radio alignIndicator="end" />);
}

function ExampleF() {
  return (<Radio />);
}

function ExampleG() {
  return (<Radio />);
}

function ExampleH() {
  return (<Radio alignIndicator={"start"} />);
}

function ExampleI() {
  return (<Radio alignIndicator={"end"} />);
}

function ExampleJ() {
  return (<Radio />);
}
