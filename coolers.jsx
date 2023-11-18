import React, { useEffect } from "react";
import { useState } from "react";
import colorNamer from "color-namer";

export default function Circle() {
  const [colornames, setColornames] = useState([]);
  const [colorz, updatedColorz] = useState("red");
  const colors = ["black", "red", "orange", "violet", "indigo", "green", "purple", "brown"];
  const [setcol, newSetcol] = useState([]);

  useEffect(() => {
    // This useEffect hook will run every time `setcol` is updated
    setColNames();
  }, [setcol]); // Depend on setcol to trigger the effect when it changes

  const setColNames = () => {
    // Map through setcol to get color names using color-namer
    const names = setcol.map((item) => colorNamer(`#${item}`));

    // Update the state with the color names
    setColornames(names);
  };

  function select_col() {
    updatedColorz(colors[Math.floor(Math.random() * colors.length)]);
  }

  function ranndomColor() {
    const randomColor =
      Math.floor(Math.random() * 222 + 33).toString(16) +
      Math.floor(Math.random() * 222 + 33).toString(16) +
      Math.floor(Math.random() * 222 + 33).toString(16);

    newSetcol((prevColors) => [...prevColors, randomColor]);
  }

  const genranndomColor = () => {
    newSetcol(
      setcol.map(() => {
        return (
          Math.floor(Math.random() * 222 + 33).toString(16) +
          Math.floor(Math.random() * 222 + 33).toString(16) +
          Math.floor(Math.random() * 222 + 33).toString(16)
        );
      })
    );
  };

  return (
    <React.Fragment>
      <button onClick={ranndomColor}>Add New Color</button>
      <button onClick={genranndomColor}>Generate Random Color</button>
      <div className="flex">
        {setcol.map((item, index) => (
          <div key={index} className="w-full h-[80vh] flex-col justify-center items-center gap-10" style={{ backgroundColor: `#${item}` }}>
            <button
              className="delete"
              onClick={() =>
                newSetcol(
                  setcol.filter((colorItem) => {
                    return colorItem !== item;
                  })
                )
              }
            >
              Delete
            </button>
            <button
              className="copy"
              onClick={() => {
                navigator.clipboard.writeText(`#${item}`);
              }}
            >
              Copy
            </button>
            <div className="text-3xl uppercase ">#{item}</div>
            {colornames[index] && (
              <div>
                Color Name: {colornames[index].ntc[0].name}, RGB: {colornames[index].ntc[0].hex}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-full w-20 h-20 m-auto" onClick={select_col} style={{ backgroundColor: colorz }}></div>
    </React.Fragment>
  );
}
