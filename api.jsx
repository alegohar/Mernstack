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
    {JSON.stringify(myData)}
    </>
}
