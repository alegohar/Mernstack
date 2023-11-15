import React from "react";
import { Children } from 'react';
import axios from "axios"
import { json } from "react-router-dom";
import { useState } from "react";

export default function ParentItem(props)
{
    const [myData, setMyData] = useState([]);

    const getCustomersData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((result) => setMyData(result.data));
    }
    
    return <>
    Hello, 1231;I am testing my first ever parent children
    <div>1231231</div>
    {props.children}
    <button onClick={getCustomersData}>test api</button>
    <div className="grid grid-cols-4 gap-4">
    {myData.map(
        (devs) => {
           return <>
           <div className="grid-cols-4	border-solid border-2 p-[20px]">
           <div>{devs.title}</div> 
           <div>{devs.body}</div>
           </div>
           </>
        }

    )}
    </div>
    </>
}
