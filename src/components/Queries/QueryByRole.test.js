import { render, screen } from "@testing-library/react";
import QueryByRole from "./QueryByRole";

describe("GetBy Vs QueryBy", () => {
  test("Buttons renders correctly", () => {
    render(<QueryByRole />);
    const buttonDark = screen.queryByRole("button", { name: "Dark" });
    expect(buttonDark).toBeInTheDocument();

    const buttonLight = screen.queryByRole("button", { name: "Light" });
    expect(buttonLight).toBeFalsy();
  });
});
