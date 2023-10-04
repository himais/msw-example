import { screen, render } from "@testing-library/react";
import { Posts } from "./Posts";

describe("Posts Component", () => {
  it("renders post content", () => {
    render(<Posts label="Test" />);

    screen.debug();

    expect(screen.getByText("Claudia")).toBeVisible();
  });
});
