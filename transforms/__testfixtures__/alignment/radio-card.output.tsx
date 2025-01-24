import React from "react";
import { Alignment, RadioCard } from "@blueprintjs/core";

function ExampleA() {
  return (<RadioCard alignIndicator={Alignment.START} />);
}

function ExampleB() {
  return (<RadioCard alignIndicator={Alignment.END} />);
}

function ExampleC() {
  return (<RadioCard />);
}

function ExampleD() {
  return (<RadioCard alignIndicator="start" />);
}

function ExampleE() {
  return (<RadioCard alignIndicator="end" />);
}

function ExampleF() {
  return (<RadioCard />);
}

function ExampleG() {
  return (<RadioCard />);
}

function ExampleH() {
  return (<RadioCard alignIndicator={"start"} />);
}

function ExampleI() {
  return (<RadioCard alignIndicator={"end"} />);
}

function ExampleJ() {
  return (<RadioCard />);
}
