import { render, screen } from "@testing-library/react";
import GetByPlaceholderText from "./GetByPlaceholderText";

describe("GetByRole", () => {
  test("Elements Render Correctly", () => {
    render(<GetByPlaceholderText />);

    const inputFirstname = screen.getByPlaceholderText("Indiquez votre prénom");
    expect(inputFirstname).toBeInTheDocument();

    const inputLastname = screen.getByPlaceholderText("Indiquez votre nom");
    expect(inputLastname).toBeInTheDocument();
  });
});
