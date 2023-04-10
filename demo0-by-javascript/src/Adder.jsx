// Importing the useState hook from the React library
import { useState } from "react";

// Create a functional component called Adder
const Adder = () => {
  // Declaring and initializing state variables using the useState hook
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  // Create event handler functions to update state when input values change
  // without transforming string to number
  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  // Create an event handler function to update the sum state when the Add button is clicked
  const handleAdd = () => {
    setSum(num1 + num2);
  };

  // Returning Adder component
  return (
    <div>
      <div>
        <label htmlFor="num1">Number 1:</label>
        <input id="num1" onChange={handleNum1Change} />
      </div>
      <div>
        <label htmlFor="num2">Number 2:</label>
        <input id="num2" onChange={handleNum2Change} />
      </div>
      <button onClick={handleAdd}>Add</button>
      <div>Sum: {sum}</div>
    </div>
  );
};

export default Adder;
