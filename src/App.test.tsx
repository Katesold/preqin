import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import App from "./App";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

test("renders App with table container", () => {
  const routes = [
    {
      path: "/",
      element: <App />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 0,
  });

  render(<RouterProvider router={router} />);

  const linkElement = screen.getByText(/investor/i);
  expect(linkElement).toBeInTheDocument();
});
