import React from "react";
import { Alignment, SwitchCard } from "@blueprintjs/core";

function ExampleA() {
  return (<SwitchCard alignIndicator={Alignment.START} />);
}

function ExampleB() {
  return (<SwitchCard alignIndicator={Alignment.END} />);
}

function ExampleC() {
  return (<SwitchCard />);
}

function ExampleD() {
  return (<SwitchCard alignIndicator="start" />);
}

function ExampleE() {
  return (<SwitchCard alignIndicator="end" />);
}

function ExampleF() {
  return (<SwitchCard />);
}

function ExampleG() {
  return (<SwitchCard />);
}

function ExampleH() {
  return (<SwitchCard alignIndicator={"start"} />);
}

function ExampleI() {
  return (<SwitchCard alignIndicator={"end"} />);
}

function ExampleJ() {
  return (<SwitchCard />);
}
