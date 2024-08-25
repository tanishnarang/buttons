import { useState } from "react";
import Dropdown from "./components/Dropdown";
export default function App() {
  const [selection, setSelection] = useState();

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <Dropdown options={options} selection={selection} onSelect={handleSelect} />
  );
}
