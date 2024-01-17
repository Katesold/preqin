import { StyledTableRow, TableData } from "./styles";

import React from "react";
import { useNavigate } from "react-router-dom";
import { FirmData } from "../../types";

interface Props {
  data: FirmData;
  readOnly?: boolean;
}

const TableRow: React.FC<Props> = ({ data, readOnly }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/investors/${data.firmID}`, { state: data });
  };

  return (
    <StyledTableRow onClick={readOnly ? undefined : handleClick}>
      <TableData>{data.firmID}</TableData>
      <TableData>{data.firmName}</TableData>
      <TableData>{data.firmType}</TableData>
      <TableData>{data.yearEst === "" ? "-" : data.yearEst}</TableData>
      <TableData>{data.address}</TableData>
    </StyledTableRow>
  );
};

export default TableRow;
