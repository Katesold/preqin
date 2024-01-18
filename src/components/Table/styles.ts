import styled from "styled-components";

export const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 10px;
  border-collapse: collapse;
  text-align: center;
`;

export const TableHead = styled.thead`
  width: 100%;
  background-color: #abfdeb;
`;

export const TableBody = styled.tbody<{ readOnly?: boolean }>`
  width: 100%;
  tr:hover {
    background-color: ${({ readOnly }) => (readOnly ? "none" : "#abfdeb")};
  }
`;

export const TableHeader = styled.th`
  width: 10%;
  height: 28px;
  font-size: 11px;
  line-height: 18px;
  border-top: 1pt solid #e2e2e2;
  color: #757575;
`;

export const TableHeaderRow = styled.tr`
  width: 100%;
  border-bottom: 1pt solid #e2e2e2;
`;
