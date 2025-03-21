import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1); //async
    console.log(count);
  };
  const onSub = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onAdd}>Increase</button>
      <button onClick={onSub}>Decrease</button>
    </div>
  );
};
export default Counter;
