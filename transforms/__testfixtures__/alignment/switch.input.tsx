import React from "react";
import { Alignment, Switch } from "@blueprintjs/core";

function ExampleA() {
  return (<Switch alignIndicator={Alignment.LEFT} />);
}

function ExampleB() {
  return (<Switch alignIndicator={Alignment.RIGHT} />);
}

function ExampleC() {
  return (<Switch alignIndicator={Alignment.CENTER} />);
}

function ExampleD() {
  return (<Switch alignIndicator="left" />);
}

function ExampleE() {
  return (<Switch alignIndicator="right" />);
}

function ExampleF() {
  return (<Switch alignIndicator="center" />);
}

function ExampleG() {
  return (<Switch />);
}

function ExampleH() {
  return (<Switch alignIndicator={"left"} />);
}

function ExampleI() {
  return (<Switch alignIndicator={"right"} />);
}

function ExampleJ() {
  return (<Switch alignIndicator={"center"} />);
}
