import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "./Input";

describe("Input component", () => {
  test("render without label", () => {
    render(<Input />);
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  test("render without placeholder", () => {
    render(<Input />);
    expect(screen.getByPlaceholderText(/what/i)).toBeInTheDocument();
  });

  test("onChange work", () => {
    render(<Input />);

    const input = screen.getByTestId("input");

    userEvent.type(input, "ggg")
    expect(screen.getByTestId("value-h2")).toContainHTML("ggg");
  });
});

describe("toggle events", () => {
  test("toggle work", () => {
    render(<Input />);
    const button = screen.getByTestId("toggle-btn");

    expect(screen.queryByTestId("toggle-p")).toBeNull();
    fireEvent.click(button);
    expect(screen.getByTestId("toggle-p")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByTestId("toggle-p")).toBeNull();
  });
});
