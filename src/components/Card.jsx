import React from "react";
import style from "../styles/card.module.css"
import { Link } from "react-router-dom"



export function Card(props){

    return(
        
        <div className={style.card}>

            <Link to={`/datitos/${props.id}`} style={{ textDecoration: 'none' }}>
             <div className={style.imgContainer}>
                <img className={style.img} src={props.img} alt="pikaimg"></img>
            </div>
            <div className={style.data}>
            <div className={style.name}> {props.name}</div>
            <div className={style.ability}>ability: {props.ability}</div>
           </div>
           </Link>

        </div>
    )
}