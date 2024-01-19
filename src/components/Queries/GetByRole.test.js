import { render, screen } from "@testing-library/react";
import GetByRole from "./GetByRole";

describe("GetByRole", () => {
  test("Elements Render Correctly", () => {
    render(<GetByRole />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();

    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeInTheDocument();

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();

    const textboxLastName = screen.getByRole("textbox", { name: "Nom" });
    expect(textboxLastName).toBeInTheDocument();

    const textboxFirstName = screen.getByRole("textbox", { name: "Prénom" });
    expect(textboxFirstName).toBeInTheDocument();

    const listbox = screen.getByRole("listbox");
    expect(listbox).toBeInTheDocument();

    const checkboxTerms = screen.getByRole("checkbox", {
      name: `J'accepte les termes et conditions`,
    });
    expect(checkboxTerms).toBeInTheDocument();

    const checkboxNewletter = screen.getByRole("checkbox", {
      name: `Je m'abbone à la nesletter`,
    });
    expect(checkboxNewletter).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
