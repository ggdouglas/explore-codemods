import React from "react";
import { Button } from "@blueprintjs/core";

function ExampleA() {
  return <Button small={true}>test</Button>;
}

function ExampleB() {
  return <Button small>test</Button>;
}

function ExampleC() {
  return <Button small={false}>test</Button>;
}
