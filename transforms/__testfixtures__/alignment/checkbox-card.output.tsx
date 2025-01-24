import React from "react";
import { Alignment, CheckboxCard } from "@blueprintjs/core";

function ExampleA() {
  return (<CheckboxCard alignIndicator={Alignment.START} />);
}

function ExampleB() {
  return (<CheckboxCard alignIndicator={Alignment.END} />);
}

function ExampleC() {
  return (<CheckboxCard />);
}

function ExampleD() {
  return (<CheckboxCard alignIndicator="start" />);
}

function ExampleE() {
  return (<CheckboxCard alignIndicator="end" />);
}

function ExampleF() {
  return (<CheckboxCard />);
}

function ExampleG() {
  return (<CheckboxCard />);
}

function ExampleH() {
  return (<CheckboxCard alignIndicator={"start"} />);
}

function ExampleI() {
  return (<CheckboxCard alignIndicator={"end"} />);
}

function ExampleJ() {
  return (<CheckboxCard />);
}
