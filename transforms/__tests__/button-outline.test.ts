jest.autoMockOff();

import { defineTest } from "jscodeshift/dist/testUtils";

const name = "button-outline";
const fixtures = ["button"] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, null, `${name}/${test}`, {
      parser: "tsx",
    })
  );
});
