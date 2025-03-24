import { useState } from "react";
import ClassCounter from "../classCounter";
import Counter from "../counter";
import SaleBanner from "../saleBanner";

const Counters = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter setCount={setCount} count={count} />
      {/* <ClassCounter /> */}
      {count > 5 && <SaleBanner name="Nilesh" />}
    </div>
  );
};
export default Counters;
