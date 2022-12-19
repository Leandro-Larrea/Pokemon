import React from "react";
import { Aside } from "./Aside";
import { Cards } from "./Cards";
import style from "../styles/cards.module.css"

export const Home = ()=>{
    return(
        <div className={style.main}>
            <Aside></Aside>
            <Cards></Cards>
        </div>
    )
}