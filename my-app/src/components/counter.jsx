import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Function to increase count
  const increase = () => setCount(count + 1);

  // Function to decrease count
  const decrease = () => setCount(count - 1);

  // Function to reset count
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p className="count-display">Count: {count}</p>
      <div className="button-group">
        <button className="btn btn-secondary btn-sm" onClick={increase}>Increase</button>
        <button className="btn decrease" onClick={decrease}>Decrease</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
