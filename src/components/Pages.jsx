import React from "react";
import style from "../styles/pages.module.css"

export const Pages = ({length, updating, currentPage, pokePerPage})=>{
    const buttons = [];
    for(let i = 1; i <= Math.ceil(length/pokePerPage); i++ ){
        buttons.push(i)
    }
    return (
        <div className={style.buttonContainer}>
            {buttons.length && buttons.map(e => <button className={style.button} key={e} onClick={()=>updating(e)}>{e}</button> )}
        </div>
    )
}