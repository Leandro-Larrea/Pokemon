import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterOrigin, sortPokemons } from "../redux/actions";
import style from "../styles/cards.module.css"
import { Filter } from "./Filter";

export const Aside = ()=>{

    const [c, setC] = useState(0)

    const f = ()=>{
        c === 0? setC(1): setC(0)
    }

    const dispatch = useDispatch()
    

    const origin = (e)=>{
        
        dispatch(filterOrigin(e.target.value))
    }

    const sort = (e) =>{
        dispatch(sortPokemons(e.target.value))
    }

    return(
        <aside className={style.asidePosition}> 
          
        <div className={style.menu}>
            <div className={style.position}>
                <div className={style.logic}>
                    <button className={style.sort} onClick={sort} value="AZ">Sort by A-Z</button>
                    <button className={style.sort} onClick={sort} value="ZA">Sort by Z-A</button>
                    <button className={style.sort} onClick={sort} value="attackHigher">Sort by high Attack </button>
                    <button className={style.sort} onClick={sort} value="attackLower">Sort by less Attack</button>
                    <button onClick={origin} value="api" className={style.sort}>Filter by Api</button>
                    <button className={style.sort}>Filter by Db</button>
                    <button className={style.sort} onClick={f}>Filter by types</button>
                </div>
            </div>
            <Filter c={c}></Filter>
        </div>
        
    </aside>
    )
}