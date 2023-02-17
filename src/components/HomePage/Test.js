import React, { useState } from 'react';

const Test = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div data-cy="counter">
        Here is the count
        {' '}
        {counter}
      </div>
      <button
        data-cy="increment"
        type="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        data-cy="decrement"
        type="button"
        onClick={() => (
          setCounter((prev) => prev - 1)
        )}
      >
        Decrement
      </button>
    </>
  );
};
export default Test;
