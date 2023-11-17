import React from "react";
import { Header } from "../Components/Header";
import { useState } from "react";
export default function Circle() {
  const[colorz,updatedColorz] = useState("red");
  const colors = ["black", "red", "orange","violet","indigo","green","purple","brown"];
  const mycol = [];
  const [setcol, newSetcol] = useState([]);
  function select_col() {
    updatedColorz(colors[(Math.floor(Math.random() * colors.length))]);
    
  }
  function ranndomColor()
  {
    const randomColor = Math.floor(Math.random() * 222 + 33).toString(16) +
    Math.floor(Math.random() * 222 + 33).toString(16) +
    Math.floor(Math.random() * 222 + 33).toString(16);
    newSetcol((prevColors) => [...prevColors, randomColor]);
    
  }
  const genranndomColor = () =>{
    
    newSetcol(setcol.map(
        () => {
            return (
                Math.floor(Math.random() * 222 + 33).toString(16) +
                Math.floor(Math.random() * 222 + 33).toString(16) +
                Math.floor(Math.random() * 222 + 33).toString(16)
              );
        }
    )
    ) }
  return (
    <React.Fragment>
      <button onClick={ranndomColor}>Add New Color</button>
      <button onClick={genranndomColor}>Generate Random Color</button>
      <div className="flex">
    {setcol.map((item) => (
        <div className="w-full h-[80vh] flex-col justify-center items-center gap-10" style={{backgroundColor: `#${item}`}}>
<button
              className="delete"
              onClick={() =>
                newSetcol(
                    setcol.filter((colorItem) => {
                    if (colorItem != item) return colorItem;
                  })
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <button
              className="copy"
              onClick={() => {
                navigator.clipboard.writeText(`#${item}`);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </button>
            <div className="text-3xl uppercase ">#{item}</div>

        </div>
    )
    )

    
    
    }
    
      </div>
      <div className='rounded-full	w-20 h-20 m-auto' onClick={select_col} style={{ backgroundColor: colorz}}></div>
    </React.Fragment>
  );
}
