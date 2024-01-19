import { render, screen } from "@testing-library/react";
import GetByDisplayValue from "./getByDisplayValue";

test("Elements Render Correctly", () => {
  render(<GetByDisplayValue />);

  const inputFirstname = screen.getByDisplayValue("Peggy");
  expect(inputFirstname).toBeInTheDocument();

  const inputLastname = screen.getByDisplayValue("Gou");
  expect(inputLastname).toBeInTheDocument();
});
