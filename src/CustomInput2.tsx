import React, { useEffect, useRef } from "react";
 
export const CustomInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
 
  useEffect(() => {
    inputRef.current = document.getElementById("name") as HTMLInputElement;
    inputRef.current.addEventListener("keypress", onKeyPress);
 
    return () => {
      inputRef.current?.removeEventListener("keypress", onKeyPress);
    };
  }, []);
 
  const onKeyPress = () => {
    /* Handle input key press */
  };
 
  return (
    <div>
      <label htmlFor={"name"}>Name</label>
      <input id={"name"} placeholder={"Enter your name"} />
      <button type={"button"}>Focus input</button>
    </div>
  );
};