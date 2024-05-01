import { useState, useCallback } from "react";


export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = useCallback(() => setCount(prev => prev + 1), [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCounter}>Click</button>
    </div>
  );
}
