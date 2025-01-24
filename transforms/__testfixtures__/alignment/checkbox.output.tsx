import React from "react";
import { Alignment, Checkbox } from "@blueprintjs/core";

function ExampleA() {
  return (<Checkbox alignIndicator={Alignment.START} />);
}

function ExampleB() {
  return (<Checkbox alignIndicator={Alignment.END} />);
}

function ExampleC() {
  return (<Checkbox />);
}

function ExampleD() {
  return (<Checkbox alignIndicator="start" />);
}

function ExampleE() {
  return (<Checkbox alignIndicator="end" />);
}

function ExampleF() {
  return (<Checkbox />);
}

function ExampleG() {
  return (<Checkbox />);
}

function ExampleH() {
  return (<Checkbox alignIndicator={"start"} />);
}

function ExampleI() {
  return (<Checkbox alignIndicator={"end"} />);
}

function ExampleJ() {
  return (<Checkbox />);
}
