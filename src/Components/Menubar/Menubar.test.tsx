import React from "react";
import Menubar from "./Menubar";
import { render, screen } from "@testing-library/react";

describe("Menubar test cases", () => {
  test("Menubar title appear", () => {
    render(<Menubar/>);
    const title = screen.getByText(/Menubar/i);
    expect(title).toBeInTheDocument();
  });
});
