import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return { counter, setCounter, handleIncrement, handleDecrement };
};

export default useCounter;
