import { render, screen } from "@testing-library/react";
import GetByRole from "./GetByRole";

describe("GetByRole", () => {
  test("Elements Render Correctly", () => {
    render(<GetByRole />);
    const h1 = screen.getByRole("heading");
    expect(h1).toBeInTheDocument();

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();

    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();

    const listbox = screen.getByRole("listbox");
    expect(listbox).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
