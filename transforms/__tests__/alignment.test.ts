jest.autoMockOff();

import { defineTest } from "jscodeshift/dist/testUtils";

const name = "alignment";
const fixtures = [
  "checkbox-card",
  "checkbox",
  "navbar-group",
  "radio-card",
  "radio",
  "switch-card",
  "switch",
] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, null, `${name}/${test}`, {
      parser: "tsx",
    })
  );
});
