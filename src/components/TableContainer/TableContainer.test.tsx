import { render, screen } from "@testing-library/react";

import { TableContainer } from "./TableContainer";

window.alert = jest.fn();

test("renders table container and fetches data", async () => {
  const { container } = render(<TableContainer />);

  expect(container).toMatchSnapshot();
  expect(screen.getByText("Firm ID")).toBeInTheDocument();
});
