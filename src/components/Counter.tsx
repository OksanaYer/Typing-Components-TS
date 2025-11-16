// components/Counter.tsx
// This component should receive an `initialCount` number prop
// Pass that initial count as the initial value of a piece of state called count
// Render buttons to increase, decrease and reset
import { useState } from "react";

type CounterProps = {
  initialCount: number;
}


const Counter = ({ initialCount }: CounterProps ) => {
  const [count, setCount] = useState(initialCount);
  const handleIncrease = ()=> setCount(count+1);
  const handleDecrease = ()=> setCount(count-1);
  const handleReset = ()=> setCount(initialCount);
  
  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "150px"
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "hotpink",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  };

  const numberStyle: React.CSSProperties = {
    color: "white",
    backgroundColor: "black",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "18px",
    textAlign: "center"
  };

  return (
    <div style={wrapperStyle}>
      <div style={numberStyle}></div>
      <p>Initial count: {count}</p>;
      <button style={buttonStyle} onClick={handleIncrease}>Increase</button>
      <button style={buttonStyle} onClick={handleDecrease}>Decrease</button>
      <button style={buttonStyle} onClick={handleReset}>Reset</button>
    
    </div>
  )
};
 
export default Counter;
