import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownHeader = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.span<{ $arrowUp?: boolean }>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${({ $arrowUp }) => ($arrowUp ? "0 5px 5px" : "5px 5px 0")};
  border-color: ${({ $arrowUp }) =>
    $arrowUp
      ? "transparent transparent #000 transparent"
      : "#000 transparent transparent transparent"};
  margin-left: 5px;
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const DropdownListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;
