import { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

useEffect(() => {
    document.title = "Stan licznika wynosi " + counter;
});

  const increase = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrease = () => {
    setCounter((prevState) => prevState - 1);
  };

  const clear = () => {
    setCounter(0);
  };

  return (
    <div>
      Stan licznika: {counter}
      <br />
      <button onClick={increase}>Zwiększ o jeden</button>
      <br />
      <button onClick={decrease}>Zmniejsz o jeden</button>
      <br />
      <button onClick={clear}>Zeruj</button>
    </div>
  );
};
