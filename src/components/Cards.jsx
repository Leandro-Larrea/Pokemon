import React from "react";
import {Card} from "./Card.jsx";
import { useEffect } from "react";
import style from "../styles/cards.module.css"
import { useDispatch, useSelector } from "react-redux/";
import { getAll } from "../redux/actions/index.js";
import pikachu from "../images/pikachu-running.gif"


export function Cards(props){

    const pokemons = useSelector((state) => state.pokeList)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!pokemons.length){dispatch(getAll())}
    },[])

    if(pokemons.length){
        console.log("aca ya tendriamos algo", pokemons)
return(<div className={style.cards}>
     {pokemons.map((e)=>{
    return(<Card key={e.id}
        name = {e.name}
        ability = {e.ability}
        img = {e.img}
        id = {e.id}
        types = {e.types}
        />
    )
})}
    </div>
)
}
else{
    return <div>
        <img className={style.pikachu} src={pikachu} alt="s" />
    </div>
}
}
