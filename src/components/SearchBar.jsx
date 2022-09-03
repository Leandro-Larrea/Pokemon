import React from "react";
import { useState } from "react";
import style from "../styles/searchBar.module.css";

export function Search(props){
    const [text, setText] = React.useState("");
    function handleText(e){
        setText(e.target.value);   
    }

    function buscar(){
        props.onSearch(text)
        setText("")
    }

    return(
        <div className={style.container}>      
            <input className={style.input} type="text" onChange={handleText} value={text}></input>
            <button className={style.button} onClick={buscar}>Buscar</button>
                 
        </div>    
    )
}