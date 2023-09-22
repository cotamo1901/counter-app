import { useState } from "react";
import PropTypes, { func } from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, seCounter] = useState(value);

  const handleAdd = () => {
    seCounter(counter + 1);
  };

  const handleRemove = () => {
    seCounter(counter - 1);
  };

  const handleReset = () => {
    seCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRemove}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

// CounterApp.defaultProps={
//     value: 1233
// }
