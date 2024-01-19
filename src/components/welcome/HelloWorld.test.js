import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test("renders Hello World", () => {
  render(<HelloWorld />);
  const divElement = screen.getByText(/hello world/i);
  expect(divElement).toBeInTheDocument();
});
