import { render, screen } from "@testing-library/react";
import IncrementCount from "./IncrementCount";
import userEvent from "@testing-library/user-event";

describe("Learn User Interactions", () => {
  test("Elements render correctly", () => {
    render(<IncrementCount />);

    const h1 = screen.getByRole("heading");
    expect(h1).toBeInTheDocument();

    const button = screen.getByRole("button", {
      name: /Vous avez cliqué \d+ fois/,
    });
    expect(button).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox", {
      name: /j'accepte les termes et conditions/i,
    });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test("Number of counter is 0 before click", () => {
    render(<IncrementCount />);

    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("0");

    const button = screen.getByRole("button", {
      name: /Vous avez cliqué \d+ fois/,
    });
    expect(button).toHaveTextContent("Vous avez cliqué 0 fois");
  });

  test("Button disabled before click", () => {
    render(<IncrementCount />);
    const button = screen.getByRole("button", {
      name: /Vous avez cliqué \d+ fois/,
    });
    expect(button).toBeDisabled();
  });

  test("Color of button is orange", () => {
    render(<IncrementCount />);

    const button = screen.getByRole("button", {
      name: /Vous avez cliqué \d+ fois/,
    });
    expect(button).toHaveStyle({ "background-color": "orange" });
  });

  test("Number of counter is 1 and color cyan after click", async () => {
    render(<IncrementCount />);
    const user = userEvent.setup();

    const button = screen.getByRole("button", {
      name: /Vous avez cliqué \d+ fois/,
    });

    const checkbox = screen.getByRole("checkbox", {
      name: /j'accepte les termes et conditions/i,
    });
    await user.click(checkbox);

    await user.click(button);

    expect(button).toHaveTextContent("Vous avez cliqué 1 fois");

    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("1");
    expect(button).toHaveStyle({ "background-color": "cyan" });
  });

  test("Color of button === orange", () => {
    render(<IncrementCount />);

    const button = screen.getByRole("button", {
      name: /Vous avez cliqué \d+ fois/,
    });
    expect(button).toHaveStyle({ "background-color": "orange" });
  });

  test("Number of counter is 2 and color orange after double click", async () => {
    render(<IncrementCount />);
    const user = userEvent.setup();

    const button = screen.getByRole("button", {
      name: /Vous avez cliqué \d+ fois/,
    });

    const checkbox = screen.getByRole("checkbox", {
      name: /j'accepte les termes et conditions/i,
    });
    await user.click(checkbox);

    await user.dblClick(button);

    expect(button).toHaveTextContent("Vous avez cliqué 2 fois");

    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("2");
    expect(button).toHaveStyle({ "background-color": "orange" });
  });

  test("Number of counter is 3 and color cyan after click + dbl click", async () => {
    render(<IncrementCount />);
    const user = userEvent.setup();

    const button = screen.getByRole("button", {
      name: /Vous avez cliqué \d+ fois/,
    });

    const checkbox = screen.getByRole("checkbox", {
      name: /j'accepte les termes et conditions/i,
    });
    await user.click(checkbox);

    await user.click(button);
    await user.dblClick(button);

    expect(button).toHaveTextContent("Vous avez cliqué 3 fois");

    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("3");
    expect(button).toHaveStyle({ "background-color": "cyan" });
  });
});
