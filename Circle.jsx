import React from "react";
import { Header } from "../Components/Header";
import { useState } from "react";
export default function Circle() {
  const[colorz,updatedColorz] = useState("red");
  const colors = ["black", "red", "orange","violet","indigo","green","purple","brown"];
  function select_col() {
    updatedColorz(colors[(Math.floor(Math.random() * colors.length))]);
    
  }
  return (
    <React.Fragment>
      <div className='rounded-full	w-20 h-20 m-auto' onClick={select_col} style={{ backgroundColor: colorz}}></div>
    </React.Fragment>
  );
}
