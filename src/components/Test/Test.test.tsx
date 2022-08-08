import { screen, render } from "@testing-library/react";
import { TestItem } from "./TestItem";

describe("TestItem component", () => {

  test("List render", () => {
    render(<TestItem item="react" />);
    expect(screen.getByText("react")).toBeInTheDocument();
  });

  test("List render without data", () => {
    render(<TestItem />);
    expect(screen.queryByText("react")).toBeNull();
  });

  test("List snapshot", () => {
      const view = render(<TestItem/>)
      expect(view).toMatchSnapshot()
  })
});
