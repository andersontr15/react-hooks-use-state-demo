import React, { useState } from 'react';

const Counter = ({ incrementBy, initialCount = 0 }) => {
  const [state, setCount] = useState({
    count: initialCount,
    version: '1.0.0',
  });
  const { count } = state;

  const incrementCount = () =>
    setCount(prevState => {
      return { ...prevState, count: count + incrementBy };
    });

  const decrementCount = () => {
    setCount(prevState => {
      return { ...prevState, count: count - incrementBy };
    });
  };

  return (
    <div>
      i am the counter component
      <hr />
      <span>The count is: {count}</span>
      <hr />
      <button onClick={incrementCount}>
        Click to increment by {incrementBy}
      </button>
      <button onClick={decrementCount}>
        Click to decrement by {incrementBy}
      </button>
    </div>
  );
};

export default Counter;
