import React from "react";
import { Header } from "../Components/Header";
import { useState } from "react";
export default function Circle() {
  const[colorz,updatedColorz] = useState("red");
  const colors = ["black", "red", "orange","violet","indigo","green","purple","brown"];
  const mycol = [];
  const [setcol, newSetcol] = useState(['000']);
  function select_col() {
    updatedColorz(colors[(Math.floor(Math.random() * colors.length))]);
    
  }
  function ranndomColor()
  {
    newSetcol(colors[(Math.floor(Math.random() * colors.length))]);
    
  }
  return (
    <React.Fragment>
      <button onClick={ranndomColor}>Add New Color</button>
      <div className="flex">

    <div className="w-full h-[80vh]" style={{backgroundColor: `#${setcol}`}}></div>

      </div>
      <div className='rounded-full	w-20 h-20 m-auto' onClick={select_col} style={{ backgroundColor: colorz}}></div>
    </React.Fragment>
  );
}
