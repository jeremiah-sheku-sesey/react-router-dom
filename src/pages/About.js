
import React from "react"
import { useEffect, useState } from "react";


export default function About(props){

    const [state, setState] = useState('Hello world')
  useEffect(
    ()=>{
    document.title='app | about'
    }
  );

    return (
        <>
            <h1>About</h1>

        </>
    )
}