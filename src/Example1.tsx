import React, { useRef } from 'react';

/**
 * Unlike state variables, changing the value of a ref does not trigger a re-render of the component, making it ideal for certain scenarios.
 * @returns 
 */
export function Example1() {
  const myRef = useRef(null);

  // Accessing the current value of the ref
  console.log(myRef.current);

  return <div ref={myRef}>Hello, useRef!</div>;
}