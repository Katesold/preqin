import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Dropdown from "./Dropdown";

const options = ["Option 1", "Option 2", "Option 3"];
const onSelect = jest.fn();
const selectedOption = "Select an option";

describe("Dropdown", () => {
  it("renders dropdown component with closed menu", () => {
    render(
      <Dropdown
        options={options}
        onSelect={onSelect}
        selectedOption={selectedOption}
      />
    );

    expect(screen.getByText(selectedOption)).toBeInTheDocument();

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("opens and closes dropdown menu on header click", async () => {
    render(
      <Dropdown
        options={options}
        onSelect={onSelect}
        selectedOption={selectedOption}
      />
    );

    fireEvent.click(screen.getByText(selectedOption));
    expect(screen.getByTestId("select-option")).toBeInTheDocument();

    fireEvent.click(screen.getByText(selectedOption));
    expect(screen.queryByTestId("select-option")).not.toBeInTheDocument();
  });

  it("calls onSelect when an option is clicked", () => {
    render(
      <Dropdown
        options={options}
        onSelect={onSelect}
        selectedOption={selectedOption}
      />
    );

    fireEvent.click(screen.getByText(selectedOption));

    fireEvent.click(screen.getByText("Option 2"));
    expect(onSelect).toHaveBeenCalledWith("Option 2");
  });
});
