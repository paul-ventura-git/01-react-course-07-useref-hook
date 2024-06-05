import React, { useRef } from "react";
 
export const CustomInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
 
  const onButtonClick = () => {
    inputRef.current?.focus();
  };
 
  return (
    <div>
      <label htmlFor={"name"}>Name</label>
      <input id={"name"} placeholder={"Enter your name"} />
      <button type={"button"} onClick={onButtonClick}>
        Focus input
      </button>
    </div>
  );
};