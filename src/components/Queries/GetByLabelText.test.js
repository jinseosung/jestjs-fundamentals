import { render, screen } from "@testing-library/react";
import GetByLabelText from "./GetByLabelText";

describe("GetByRole", () => {
  test("Elements Render Correctly", () => {
    render(<GetByLabelText />);

    const textboxLastName = screen.getByLabelText("Nom");
    expect(textboxLastName).toBeInTheDocument();

    const textboxFirstName = screen.getByLabelText("Prénom");
    expect(textboxFirstName).toBeInTheDocument();

    const userName = screen.getByLabelText("Username");
    expect(userName).toBeInTheDocument();

    const checkboxTerms = screen.getByLabelText(
      `J'accepte les termes et conditions`
    );
    expect(checkboxTerms).toBeInTheDocument();

    const checkboxNewletter = screen.getByLabelText(
      `Je m'abbone à la nesletter`
    );
    expect(checkboxNewletter).toBeInTheDocument();

    const input = screen.getByLabelText("Animal préféré", {
      selector: "input",
    });
    expect(input).toBeInTheDocument();

    const textarea = screen.getByLabelText("Animal préféré", {
      selector: "textarea",
    });
    expect(textarea).toBeInTheDocument();
  });
});
