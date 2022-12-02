import React from "react";
import SideBar from "./Sidebar";
import { render, screen } from "@testing-library/react";

describe("Sidebar test case running", () => {
  test("Sidebar UI loading test case", () => {
    render(<SideBar />);
    const title = screen.getByText(/Sidebar/i);
    expect(title).toBeInTheDocument();
  });
});
