import React, { useRef, useState } from 'react';

/**
 * Expensive component
 * @returns 
 */
export function StoringUnmanagedValues() {
  const expensiveValueRef = useRef<number>(0);
  const [count, setCount] = useState<number>(0);

  const calculateExpensiveValue = () => {
    if (expensiveValueRef.current === 0) {
      // Perform expensive calculation
      expensiveValueRef.current = /* ... */2+1;
    }
    return expensiveValueRef.current;
  };

  return (
    <div>
      <p>Expensive Value: {calculateExpensiveValue()}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}