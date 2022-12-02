import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Test Suite", () => {
  test("App UI loading test", () => {
    render(<App />);
  });
});
