import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Table from "../../components/Table/Table";
import { AssetClasses } from "../../types";
import { InvestorContainer } from "./styles";

export const Investor = () => {
  const options = Object.values(AssetClasses);
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <InvestorContainer>
      <h1>Investor {location.state.firmName}</h1>
      <Table firms={[location.state]} readOnly />
      <Dropdown
        options={options}
        onSelect={handleSelect}
        selectedOption={selectedOption}
      />
    </InvestorContainer>
  );
};
