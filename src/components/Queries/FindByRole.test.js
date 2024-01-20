import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import FindByRole from "./FindByRole";

describe("FindBy", () => {
  test("Element renders correctly", async () => {
    render(<FindByRole />);

    const buttonDark = await screen.findByRole(
      "button",
      { name: "Light" },
      { timeout: 3000 }
    );
    expect(buttonDark).toBeInTheDocument();
  });

  test("Check if image is not in the document", async () => {
    render(<FindByRole />);
    // await waitForElementToBeRemoved(() => screen.queryByRole("img"), {
    //   timeout: 3000,
    // });
    // const img = screen.queryByRole("img");
    // expect(img).toBeNull();

    await waitFor(
      () => {
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
