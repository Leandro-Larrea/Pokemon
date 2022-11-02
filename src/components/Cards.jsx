import React from "react";
import {Card} from "./Card.jsx";
import { useEffect } from "react";
import style from "../styles/cards.module.css"
import { useDispatch, useSelector } from "react-redux/";
import { filterOrigin, getAll, sortPokemons } from "../redux/actions/index.js";
import pikachu from "../images/pikachu-running.gif"


export function Cards(props){

    const pokemons = useSelector((state) => state.pokeList)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!pokemons.length){dispatch(getAll())}
    },[])

    const origin = (e)=>{
        console.log(e.target.value)
        dispatch(filterOrigin(e.target.value))
    }

    const sort = (e) =>{
        dispatch(sortPokemons(e.target.value))
    }

    if(pokemons.length){
        console.log("aca ya tendriamos algo", pokemons)
return(
<main className={style.main}>
    <aside className={style.asidePosition}>   
        <div className={style.menu}>
        <div className={style.logic}>
        <button className={style.sort} onClick={sort} value="AZ">Sort by A-Z</button>
        <button className={style.sort} onClick={sort} value="ZA">Sort by Z-A</button>
        <button className={style.sort} onClick={sort} value="attackHigher">Sort by high Attack </button>
        <button className={style.sort} onClick={sort} value="attackLower">Sort by less Attack</button>
        <button onClick={origin} value="api" className={style.sort}>Filter by Api</button>
        <button className={style.sort}>Filter by Db</button>
        </div>
        </div>
    </aside>
        <div className={style.cards}>
            {pokemons.map((e)=>{
                return(<Card key={e.id}
                    name = {e.name}
                    ability = {e.ability}
                    img = {e.img}
                    id = {e.id}
                    types = {e.types}
                    />
                    )
                }   
            )       
        }
    </div>
</main>       
)
}
else{
    return <div>
        <img className={style.pikachu} src={pikachu} alt="s" />
    </div>
}
}
