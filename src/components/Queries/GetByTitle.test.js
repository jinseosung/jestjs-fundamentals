import { render, screen } from "@testing-library/react";
import GetByTitle from "./GetByTitle";

test("Elements Render Correctly", () => {
  render(<GetByTitle />);

  const title = screen.getByTitle("Adopter notre Danonino");
  expect(title).toBeInTheDocument();
});
