import React from "react";
import { Alignment, RadioCard } from "@blueprintjs/core";

function ExampleA() {
  return (<RadioCard alignIndicator={Alignment.LEFT} />);
}

function ExampleB() {
  return (<RadioCard alignIndicator={Alignment.RIGHT} />);
}

function ExampleC() {
  return (<RadioCard alignIndicator={Alignment.CENTER} />);
}

function ExampleD() {
  return (<RadioCard alignIndicator="left" />);
}

function ExampleE() {
  return (<RadioCard alignIndicator="right" />);
}

function ExampleF() {
  return (<RadioCard alignIndicator="center" />);
}

function ExampleG() {
  return (<RadioCard />);
}

function ExampleH() {
  return (<RadioCard alignIndicator={"left"} />);
}

function ExampleI() {
  return (<RadioCard alignIndicator={"right"} />);
}

function ExampleJ() {
  return (<RadioCard alignIndicator={"center"} />);
}
