import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeader,
  TableHeaderRow,
} from "./styles";

import React from "react";
import { FirmData } from "../../types";
import TableRow from "../TableRow/TableRow";

interface Props {
  firms: FirmData[];
  readOnly?: boolean;
}

const Table: React.FC<Props> = ({ firms, readOnly = false }) => {
  return (
    <StyledTable>
      <TableHead>
        <TableHeaderRow>
          <TableHeader>Firm ID</TableHeader>
          <TableHeader>Firm Name</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Date Added</TableHeader>
          <TableHeader>Address</TableHeader>
        </TableHeaderRow>
      </TableHead>
      <TableBody readOnly={readOnly}>
        {firms.map((firm) => (
          <TableRow key={firm.firmID} data={firm} readOnly={readOnly} />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Table;
