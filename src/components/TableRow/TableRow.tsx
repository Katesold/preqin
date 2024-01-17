import { StyledTableRow, TableData } from "./styles";

import React from "react";
import { Link } from "react-router-dom";
import { FirmData } from "../../types";

interface Props {
  data: FirmData;
}

const TableRow: React.FC<Props> = ({ data }) => {
  return (
    <StyledTableRow>
      <TableData>{data.firmID}</TableData>
      <TableData>{data.firmName}</TableData>
      <TableData>{data.firmType}</TableData>
      <TableData>{data.yearEst}</TableData>
      <TableData>{data.address}</TableData>
      <TableData>
        <Link to={`/investors/${data.firmID}`}>View Details</Link>
      </TableData>
    </StyledTableRow>
  );
};

export default TableRow;
