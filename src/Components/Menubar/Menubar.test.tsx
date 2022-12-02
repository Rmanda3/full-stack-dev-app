import Menubar from "./Menubar";
import { render, screen } from "@testing-library/react";

describe("Menubar test cases", () => {
  test("Menubar title appear", () => {
    render(<Menubar/>);
    const title = screen.getByText(/Navigation Bar/i);
    expect(title).toBeInTheDocument();
  });
});
