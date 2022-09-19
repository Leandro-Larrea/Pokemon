import React from "react";
import style from "../styles/card.module.css"
import { Link } from "react-router-dom"
import { type } from "@testing-library/user-event/dist/type";



export function Card(props){
    const im = require.context("../images/type-icons")
    return(
        <div className={style.card}>

            <Link to={`/datitos/${props.id}`} style={{ textDecoration: 'none' }}>
                   <div className={style.imgContainer}>
                      <img className={style.img} src={props.img} alt="pikaimg"></img>
                  </div>
                  <div className={style.data}>
                  <div className={style.name}> {props.name} </div>
                  <div className={style.ability}>Ability: {props.ability}</div>
                  <div className={style.icosContainer}>
                    {props.types && props.types.map(p => 
                       <div className={style.icoContainer}>
                          <img className={style.ico} src={require(`../images/type-icons/Pokémon_${p.type.name}_Type_Icon.svg.png`)}>
                          </img><p className={style.icoName}>{p.type.name}</p></div>       
                     
                  )}
                  </div>
             </div>
           </Link>
        </div>
    )
}