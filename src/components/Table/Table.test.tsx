import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import Table from "./Table";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

const data = [
  {
    firmID: "2670",
    firmName: "1199SEIU National Benefit Fund",
    region: "North America",
    address: "498 Seventh Avenue",
    city: "New York",
    stateCounty: "NY",
    zipCode: "10018",
    country: "US",
    website: "http://www.1199seiubenefits.org",
    email: "pension@1199nbf.org",
    tel: "+1 646 473 9200",
    fax: "",
    generalConsultant: "",
    localLanguageFirmName: "",
    secondaryLocations: "",
    firmType: "Private Sector Pension Fund",
    yearEst: "",
    investorCurrency: "USD",
    matchingFunds: "413",
    aumCurrMn: "16260.00",
    aumUSDMn: "16260.00",
    aumEURMn: "15309.42",
    allocationAlternativesPct: "47.44",
    allocationAlternativesCurrMn: "7714.00",
    allocationAlternativesUSDMn: "7714.00",
    allocationAlternativesEURMn: "7041.64",
    allocationEquitiesPct: "30.75",
    allocationEquitiesCurrMn: "5000.00",
    allocationEquitiesUSDMn: "5000.00",
    allocationEquitiesEURMn: "4564.19",
    allocationFixedIncomePct: "14.95",
    allocationFixedIncomeCurrMn: "2431.00",
    allocationFixedIncomeUSDMn: "2431.00",
    allocationFixedIncomeEURMn: "2219.11",
    allocationCashPct: "2.87",
    allocationCashCurrMn: "466.00",
    allocationCashUSDMn: "466.00",
    allocationCashEURMn: "425.38",
    allocationOtherPct: "3.22",
    allocationOtherCurrMn: "523.00",
    allocationOtherUSDMn: "523.00",
    allocationOtherEURMn: "477.41",
    targetAllocationAlternativesPctMin: "",
    about:
      "1199SEIU National Benefit Fund is a labor-management fund that provides comprehensive benefits to working and retired healthcare industry workers, 1199SEIU United Healthcare Workers East members, and their families. The pension fund provides the infrastructure to support additional benefit funds that provide coverage for healthcare workers throughout the industry in hospitals, nursing homes, and home care agencies. It primarily benefits its members through three pension plans: the 1199SEIU Home Care Employees Pension Plan, the 1199SEIU Health Care Employees Pension Fund, and the 1199SEIU Greater New York Pension Fund.\r\n\r\n1199SEIU Health Care Employees Pension Fund, the successor of the 1199 National Pension Fund, was established in 1991. The plan is a noncontributory, multi-employer-defined benefit plan that provides financial security for 1199SEIU retirees.\r\n\r\n1199SEIU Home Care Employees Pension Fund, established in 1997, and 1199SEIU Greater New York Pension Fund, established in 1963, are also noncontributory, multi-employer defined benefit plans.",
  },
];

const routes = [
  {
    path: "/",
    element: <Table firms={data} />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/"],
  initialIndex: 0,
});

describe("Table", () => {
  it("should match snapshot", () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Private Sector Pension Fund")).toBeInTheDocument();
  });
});
