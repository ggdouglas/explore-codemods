jest.autoMockOff();

import { defineTest } from "jscodeshift/dist/testUtils";

const name = "alignment";
const fixtures = ["basic"] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, null, `${name}/${test}`, {
      parser: "tsx",
    })
  );
});
