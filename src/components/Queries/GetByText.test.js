import { render, screen } from "@testing-library/react";
import GetByText from "./GetByText";

test("Elements Render Correctly", () => {
  render(<GetByText />);

  const buttonTheme = screen.getByText("Changer la couleur");
  expect(buttonTheme).toBeInTheDocument();

  const buttonTheme2 = screen.getByText("er la coul", { exact: false });
  expect(buttonTheme2).toBeInTheDocument();

  const buttonTheme3 = screen.getByText("Changer La Couleur", { exact: false });
  expect(buttonTheme3).toBeInTheDocument();

  const buttonSubmit = screen.getByText("Submit");
  expect(buttonSubmit).toBeInTheDocument();

  const p = screen.getByText("Veuillez indiquer votre identité");
  expect(p).toBeInTheDocument();

  const p2 = screen.getByText(/^Veuillez indiquer votre identité$/i); // full string match. ignore case
  expect(p2).toBeInTheDocument();

  const p3 = screen.getByText(/identité/); // substring match
  expect(p3).toBeInTheDocument();

  const p4 = screen.getByText(/iDentité/i); // substring match
  expect(p4).toBeInTheDocument();

  // matching with a function
  // (content? : string, element? : Element | null) => boolean
  const p5 = screen.getByText((content) => content.startsWith("Veuill")); // function
  expect(p5).toBeInTheDocument();
});
