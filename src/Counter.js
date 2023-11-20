import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Licznik: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Licznik: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Zwiększ</button>
      <button onClick={() => setCount(count - 1)}>Zmniejsz</button>
    </div>
  );
};

export default Counter;
