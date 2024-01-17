import { render, screen } from "@testing-library/react";

import ErrorPage from "./ErrorPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: () => ({ statusText: "404" }),
}));

describe("ErrorPage", () => {
  it("should match snapshot", () => {
    const { container } = render(<ErrorPage />);
    expect(container).toMatchSnapshot();
    expect(
      screen.getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
