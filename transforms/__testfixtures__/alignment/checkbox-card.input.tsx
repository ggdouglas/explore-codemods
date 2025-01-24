import React from "react";
import { Alignment, CheckboxCard } from "@blueprintjs/core";

function ExampleA() {
  return (<CheckboxCard alignIndicator={Alignment.LEFT} />);
}

function ExampleB() {
  return (<CheckboxCard alignIndicator={Alignment.RIGHT} />);
}

function ExampleC() {
  return (<CheckboxCard alignIndicator={Alignment.CENTER} />);
}

function ExampleD() {
  return (<CheckboxCard alignIndicator="left" />);
}

function ExampleE() {
  return (<CheckboxCard alignIndicator="right" />);
}

function ExampleF() {
  return (<CheckboxCard alignIndicator="center" />);
}

function ExampleG() {
  return (<CheckboxCard />);
}

function ExampleH() {
  return (<CheckboxCard alignIndicator={"left"} />);
}

function ExampleI() {
  return (<CheckboxCard alignIndicator={"right"} />);
}

function ExampleJ() {
  return (<CheckboxCard alignIndicator={"center"} />);
}
