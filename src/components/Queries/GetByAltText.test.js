import { render, screen } from "@testing-library/react";
import GetByAltText from "./GetByAltText";

test("Elements Render Correctly", () => {
  render(<GetByAltText />);

  const img = screen.getByAltText("Danonino");
  expect(img).toBeInTheDocument();
});
