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
}

const Table: React.FC<Props> = ({ firms }) => {
  return (
    <StyledTable>
      <TableHead>
        <TableHeaderRow>
          <TableHeader>Firm ID</TableHeader>
          <TableHeader>Firm Name</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Date Added</TableHeader>
          <TableHeader>Address</TableHeader>
          <TableHeader>Action</TableHeader>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {firms.map((firm) => (
          <TableRow key={firm.firmID} data={firm} />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Table;
