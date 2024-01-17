import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import App from "./App";
import { Investor } from "./domains/Investor/Investor";
import { Investors } from "./domains/Investors/Investors";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

test("renders App with table container", () => {
  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "investors/:Id",
          element: <Investor />,
        },
        {
          path: "investors",
          element: <Investors />,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/investors"],
    initialIndex: 0,
  });

  const { container } = render(<RouterProvider router={router} />);
  expect(screen.getByText("Investors List")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
