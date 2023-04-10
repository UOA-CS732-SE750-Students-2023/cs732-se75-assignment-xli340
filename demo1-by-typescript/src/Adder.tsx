// Import the useState hook from the React library
import { useState } from "react";

// Create a functional component called Adder
const Adder: React.FC = () => {
  // Initialize state variables using the useState hook and set their types as number
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  // Create event handlers to update the state variables when the input fields are changed
  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setNum1(e.target.value);
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(Number(e.target.value));
  };

  // Defining an event handler function to update the sum state when the Add button is clicked
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
