import {
  Arrow,
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  DropdownListItem,
} from "./styles";

import { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={handleToggle}>
        {selectedOption}
        <Arrow $arrowUp={isOpen} />
      </DropdownHeader>
      {isOpen && (
        <DropdownList data-testid="select-option">
          {options.map((option) => (
            <DropdownListItem key={option} onClick={() => handleSelect(option)}>
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
