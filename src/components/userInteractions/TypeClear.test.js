import { render, screen } from "@testing-library/react";
import TypeClear from "./TypeClear";
import userEvent from "@testing-library/user-event";

describe("Learn type and clear", () => {
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
});
