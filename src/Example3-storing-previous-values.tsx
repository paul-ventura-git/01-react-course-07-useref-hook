import React, { useRef, useEffect } from 'react';

/**
 * Value change detector
 * Here, prevValueRef stores the previous value of the value prop, allowing us to compare it and take action when it changes.
 * @param props 
 * @returns 
 */
export function StoringPreviousValues(props: { value: number }) {
  const prevValueRef = useRef<number | undefined>();

  useEffect(() => {
    if (prevValueRef.current !== undefined && prevValueRef.current !== props.value) {
      console.log('Value changed:', prevValueRef.current, '->', props.value);
    }

    prevValueRef.current = props.value;
  }, [props.value]);

  return <div>{props.value}</div>;
}