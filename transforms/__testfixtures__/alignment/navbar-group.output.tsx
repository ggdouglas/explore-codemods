import React from "react";
import { NavbarGroup, Alignment } from "@blueprintjs/core";

function ExampleA() {
  return (<NavbarGroup align={Alignment.START} />);
}

function ExampleB() {
  return (<NavbarGroup align={Alignment.END} />);
}

function ExampleC() {
  return (<NavbarGroup />);
}

function ExampleD() {
  return (<NavbarGroup align="start" />);
}

function ExampleE() {
  return (<NavbarGroup align="end" />);
}

function ExampleF() {
  return (<NavbarGroup />);
}

function ExampleG() {
  return (<NavbarGroup />);
}

function ExampleH() {
  return (<NavbarGroup align={"start"} />);
}

function ExampleI() {
  return (<NavbarGroup align={"end"} />);
}

function ExampleJ() {
  return (<NavbarGroup />);
}
