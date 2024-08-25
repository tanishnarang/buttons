import { useState } from "react";
// import { GoArrowLeft } from "react-icons/go";
export default function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const renderedOption = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen((currentOpen) => !currentOpen);
  };

  return (
    <div>
      Select the option...
      <div onClick={handleClick}>{selection?.label || "select..."}</div>
      {isOpen && <div>{renderedOption}</div>}
    </div>
  );
}
