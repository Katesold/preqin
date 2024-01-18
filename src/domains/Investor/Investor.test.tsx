import "@testing-library/jest-dom";

import {
  RouterProvider,
  createMemoryRouter,
  useLocation,
} from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { Investor } from "./Investor";
import { useQuery } from "@tanstack/react-query"; // Mock react-query's useQuery

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

describe("Investor Component", () => {
  const mockLocationState = {
    firmID: "123",
    firmName: "Test Firm",
    firmType: "type",
    yearEst: "",
    address: "address 123",
  };

  beforeEach(() => {
    (useQuery as any).mockReturnValue({
      data: {
        data: [
          {
            investorId: "2670",
            investorName: "1199SEIU National Benefit Fund",
            fundId: "16932",
            fundName: "AFL-CIO Housing Investment Trust",
            fundManagerId: "12699",
            fundManagerName: "AFL-CIO",
            fundCurrency: "",
            fundSizeMn: "",
            committedMn: "",
            vintage: "2010",
            fundType: "Real Estate Debt",
            primarySector: "Residential",
            domicile: "Maryland",
            benchmarkLocations: "North America",
            managerExperience: "",
          },
        ],
      },
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    });
    (useLocation as any).mockReturnValue({
      state: mockLocationState,
    });
  });

  it("renders investor component with initial state", async () => {
    const routes = [
      {
        path: "investors/:Id",
        element: <Investor />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/investors/:Id"],
      initialIndex: 0,
    });
    const { container } = render(<RouterProvider router={router} />);

    expect(screen.getByText(/Firm ID/)).toBeInTheDocument();
    fireEvent.click(screen.getByText("Select an option"));
    fireEvent.click(screen.getByText("PE(Private Equity)"));
    expect(
      screen.getByText(/1199SEIU National Benefit Fund/)
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
