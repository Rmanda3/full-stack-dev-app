import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar test cases", () => {
  test("Navbar title appear", () => {
    render(<Navbar/>);
    const title = screen.getByText(/Navigation Bar/i);
    expect(title).toBeInTheDocument();
  });
});
