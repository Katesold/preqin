import { render, screen } from "@testing-library/react";

import { Investors } from "./Investors";

window.alert = jest.fn();

test("renders table container and fetches data", async () => {
  const { container } = render(<Investors />);

  expect(container).toMatchSnapshot();
  expect(screen.getByText("Firm ID")).toBeInTheDocument();
});