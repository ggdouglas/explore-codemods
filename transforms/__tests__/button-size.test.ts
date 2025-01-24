jest.autoMockOff();

import { defineTest } from "jscodeshift/dist/testUtils";

const name = "button-size";
const fixtures = ["anchor-button", "button"] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, null, `${name}/${test}`, {
      parser: "tsx",
    })
  );
});
