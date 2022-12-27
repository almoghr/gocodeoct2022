import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const something = async () => {
     //fetch logic
     //at the end setState of the items were brought from the server or api or anything else
  }
  useEffect(() => {
    something()
    console.log("only on birth of component");
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);


  return (
    <div>
      <button onClick={increment}>+</button>
      <p>count:{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
