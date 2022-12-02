import React from "react";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar test cases", () => {
  test("Navbar title appear", () => {
    render(<Navbar/>);
    const title = screen.getByText(/Technology of Science/i);
    expect(title).toBeInTheDocument();
  });
});
