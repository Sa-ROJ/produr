import React, { useState } from 'react';

const IncrementDecrement = () => {
  const [num, setNum] = useState(1);

  const handleIncrement = () => {
    if (num < 10) {
      setNum(num + 1);
    }
  };

  return (
    <>
      {num <= 10 ? (
        <>
          <h1 className="test-success">{num}</h1>
          <button
            className="btn btn-primary"
            onClick={handleIncrement}
            disabled={num === 10} // Disables button at 10
          >
            Increment
          </button>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          
          <button
            className="btn btn-primary"
            onClick={() => setNum(num - 1)}
            disabled={num === 1} // Disables button at 1
          >
            Decrement
          </button>
        </>
      ) : (
        <h1>Number reached 10!</h1>
      )}
    </>
  );
};

export default IncrementDecrement;