import { render, screen } from "@testing-library/react";
import TypeClear from "./TypeClear";
import userEvent from "@testing-library/user-event";

describe("Learn Utility APIs", () => {
  test("Write in the input", async () => {
    const user = userEvent.setup();
    render(<TypeClear />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("Bonjour");

    await user.type(input, " les amis dev !");
    expect(input.value).toBe("Bonjour les amis dev !");
    expect(input.value).toEqual("Bonjour les amis dev !");

    await user.clear(input);
    expect(input).toHaveValue("");
    expect(input.value).toBe("");
    expect(input.value).toEqual("");
  });

  test("Select a option", async () => {
    const user = userEvent.setup();
    render(<TypeClear />);

    const select = screen.getByRole("listbox");
    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");
    const option3 = screen.getByText("Option 3");
    await user.selectOptions(select, ["Option 1", "Option 2"]);
    expect(option1.selected).toBe(true);
    expect(option2.selected).toBe(true);
    expect(option3.selected).toBe(false);

    await user.deselectOptions(select, ["Option 1", "Option 2"]);
    expect(option1.selected).toBe(false);
  });
});
