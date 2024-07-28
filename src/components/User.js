import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="About">
      <h1>{props.name}</h1>
      <h1>Count={count}</h1>
      <h1>Count2={count2}</h1>
      <p>
        Position: I'm a developer and pursuing B.tech(CSE) from IIMT University
      </p>
      <p>contact: vivek@gmail.com</p>
    </div>
  );
};
export default User;
