import React from "react";
import { Alignment, SwitchCard } from "@blueprintjs/core";

function ExampleA() {
  return (<SwitchCard alignIndicator={Alignment.LEFT} />);
}

function ExampleB() {
  return (<SwitchCard alignIndicator={Alignment.RIGHT} />);
}

function ExampleC() {
  return (<SwitchCard alignIndicator={Alignment.CENTER} />);
}

function ExampleD() {
  return (<SwitchCard alignIndicator="left" />);
}

function ExampleE() {
  return (<SwitchCard alignIndicator="right" />);
}

function ExampleF() {
  return (<SwitchCard alignIndicator="center" />);
}

function ExampleG() {
  return (<SwitchCard />);
}

function ExampleH() {
  return (<SwitchCard alignIndicator={"left"} />);
}

function ExampleI() {
  return (<SwitchCard alignIndicator={"right"} />);
}

function ExampleJ() {
  return (<SwitchCard alignIndicator={"center"} />);
}
