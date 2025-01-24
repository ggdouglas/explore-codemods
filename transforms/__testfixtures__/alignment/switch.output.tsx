import React from "react";
import { Alignment, Switch } from "@blueprintjs/core";

function ExampleA() {
  return (<Switch alignIndicator={Alignment.START} />);
}

function ExampleB() {
  return (<Switch alignIndicator={Alignment.END} />);
}

function ExampleC() {
  return (<Switch />);
}

function ExampleD() {
  return (<Switch alignIndicator="start" />);
}

function ExampleE() {
  return (<Switch alignIndicator="end" />);
}

function ExampleF() {
  return (<Switch />);
}

function ExampleG() {
  return (<Switch />);
}

function ExampleH() {
  return (<Switch alignIndicator={"start"} />);
}

function ExampleI() {
  return (<Switch alignIndicator={"end"} />);
}

function ExampleJ() {
  return (<Switch />);
}
