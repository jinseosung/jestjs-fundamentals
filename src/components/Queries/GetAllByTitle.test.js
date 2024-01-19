import { render, screen } from "@testing-library/react";
import GetAllByTitle from "./GetAllByTitle";

describe("Test to learn getAllByTitle", () => {
  test("Should render two paraghraphs", () => {
    render(<GetAllByTitle />);
    const presentations = screen.getAllByTitle("presentation");
    expect(presentations.length).toBe(2);
  });
});
