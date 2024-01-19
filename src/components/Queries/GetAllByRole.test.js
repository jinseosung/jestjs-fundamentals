import { render, screen } from "@testing-library/react";
import GetAllByRole from "./GetAllByRole";

describe("Test to learn GetAllByRole", () => {
  const btnList = ["Button 1", "Button 2", "Button 3"];

  test("LI Element renders correctly", () => {
    render(<GetAllByRole btns={btnList} />);
    const li = screen.getAllByRole("listitem");
    expect(li).toHaveLength(btnList.length);
  });

  test("Should have multiple buttons", () => {
    render(<GetAllByRole btns={btnList} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(btnList.length);
  });
});
