import React from "react";
import { Alignment, Checkbox } from "@blueprintjs/core";

function ExampleA() {
  return (<Checkbox alignIndicator={Alignment.LEFT} />);
}

function ExampleB() {
  return (<Checkbox alignIndicator={Alignment.RIGHT} />);
}

function ExampleC() {
  return (<Checkbox alignIndicator={Alignment.CENTER} />);
}

function ExampleD() {
  return (<Checkbox alignIndicator="left" />);
}

function ExampleE() {
  return (<Checkbox alignIndicator="right" />);
}

function ExampleF() {
  return (<Checkbox alignIndicator="center" />);
}

function ExampleG() {
  return (<Checkbox />);
}

function ExampleH() {
  return (<Checkbox alignIndicator={"left"} />);
}

function ExampleI() {
  return (<Checkbox alignIndicator={"right"} />);
}

function ExampleJ() {
  return (<Checkbox alignIndicator={"center"} />);
}
