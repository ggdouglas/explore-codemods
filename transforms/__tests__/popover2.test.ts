jest.autoMockOff();

import { defineTest } from "jscodeshift/dist/testUtils";

const name = "popover2";
const fixtures = ["tooltip-base", "tooltip-complex"] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, null, `${name}/${test}`, {
      parser: "tsx",
    })
  );
});
