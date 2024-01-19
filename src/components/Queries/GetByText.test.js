import { render, screen } from "@testing-library/react";
import GetByText from "./GetByText";

test("Elements Render Correctly", () => {
  render(<GetByText />);

  const buttonTheme = screen.getByText("Changer la couleur");
  expect(buttonTheme).toBeInTheDocument();

  const buttonSubmit = screen.getByText("Submit");
  expect(buttonSubmit).toBeInTheDocument();

  const p = screen.getByText("Veuillez indiquer votre identité");
  expect(p).toBeInTheDocument();
});
