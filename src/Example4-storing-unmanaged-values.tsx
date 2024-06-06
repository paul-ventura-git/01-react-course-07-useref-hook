import React, { useRef, useState } from 'react';

/**
 * Expensive component
 * In this example, expensiveValueRef stores the result of an expensive calculation, ensuring that the calculation only occurs once.
 * @returns 
 */
export function StoringUnmanagedValues() {
  const expensiveValueRef = useRef<number>(0);
  const [count, setCount] = useState<number>(0);

  const calculateExpensiveValue = () => {
    /**
     * if ExpensiveValue is zero, let's do the first and unique calculation
     */
    if (expensiveValueRef.current === 0) {
      // Perform expensive calculation
      expensiveValueRef.current = /* ... */2+1;
    }
    return expensiveValueRef.current;
  };

  return (
    <div>
      <p>Expensive Value (remains the same): {calculateExpensiveValue()}</p>
      <button 
        onClick={() => {setCount(count + 1); 
          console.log("State of the component changed...")}
      }>
          Increment
      </button>
    </div>
  );
}