import { useEffect, useState } from "react";

import { AssetClasses } from "../../types";
import Dropdown from "../../components/Dropdown/Dropdown";
import { InvestorContainer } from "./styles";
import { StyledTable } from "../../components/Table/styles";
import Table from "../../components/Table/Table";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const Investor = () => {
  const options = Object.values(AssetClasses);
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [tableData, setTableData] = useState([]);

  const fetchCommitment = async (investorId = 1, selectedOption: string) => {
    const assetClass = selectedOption.slice(0, 2);
    const asset = Object.keys(AssetClasses).find((a) => a.includes(assetClass));

    const response = await fetch(
      `https://api.preqin.com/api/Investor/commitment/${
        asset ? asset.toLowerCase() : ""
      }/${investorId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch insvestor commitment");
    }

    return response.json();
  };

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["commitment"],
    queryFn: () => fetchCommitment(location.state.firmID, selectedOption),
    enabled: !!location?.state?.firmID && selectedOption !== "Select an option",
  });

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (isError && error) {
      window.alert(error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (selectedOption === "Select an option" || isError) {
      setTableData([]);
    } else {
      setTableData(data?.data);
    }
  }, [selectedOption, data?.data, isError]);

  return (
    <InvestorContainer>
      <h1>Investor {location?.state?.firmName}</h1>
      {location?.state ? <Table firms={[location?.state]} readOnly /> : null}
      <Dropdown
        options={options}
        onSelect={handleSelect}
        selectedOption={selectedOption}
      />
      {isLoading || isFetching ? (
        <p>Loading..</p>
      ) : (
        <div>
          <h2 style={{ padding: "20px" }}>Fund Details</h2>
          <StyledTable style={{ width: "50%", margin: "auto" }}>
            <tbody>
              {tableData?.length
                ? tableData.map(
                    (investor: { [s: string]: unknown } | ArrayLike<unknown>) =>
                      Object.entries(investor).map(([key, value]) => (
                        <tr key={key + value}>
                          <td
                            style={{
                              padding: "10px",
                            }}
                          >
                            {key}
                          </td>
                          <td>{value as string} </td>
                        </tr>
                      ))
                  )
                : null}
            </tbody>
          </StyledTable>
        </div>
      )}
    </InvestorContainer>
  );
};
