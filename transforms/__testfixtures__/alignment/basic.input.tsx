import React from "react";
import { NavbarGroup, Alignment } from "@blueprintjs/core";

function ExampleA() {
  return (<NavbarGroup align={Alignment.LEFT} />);
}

function ExampleB() {
  return (<NavbarGroup align={Alignment.RIGHT} />);
}

function ExampleC() {
  return (<NavbarGroup align={Alignment.CENTER} />);
}

function ExampleD() {
  return (<NavbarGroup align="left" />);
}

function ExampleE() {
  return (<NavbarGroup align="right" />);
}

function ExampleF() {
  return (<NavbarGroup align="center" />);
}

function ExampleG() {
  return (<NavbarGroup />);
}

function ExampleH() {
  return (<NavbarGroup align={"left"} />);
}

function ExampleI() {
  return (<NavbarGroup align={"right"} />);
}

function ExampleJ() {
  return (<NavbarGroup align={"center"} />);
}
