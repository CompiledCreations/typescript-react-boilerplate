import { render } from "@testing-library/react";
import React from "react";

import { App } from "./App";

test("must not throw rendering", () => {
  expect(() => render(<App title="Test" />)).not.toThrow();
});
