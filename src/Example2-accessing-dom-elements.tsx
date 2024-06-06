import React, { useRef, useEffect } from 'react';

/**
 * In this example, inputRef allows us to focus the input element when the component mounts, without needing a state variable to trigger a re-render.
 * @returns 
 */
export function AccessingDOMElements() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <p>The input starts with the focus on.</p>
      <input ref={inputRef} />
    </>
  )
}