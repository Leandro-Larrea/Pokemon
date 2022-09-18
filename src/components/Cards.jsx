import React from "react";
import {Card} from "./Card.jsx";
import { useEffect } from "react";
import style from "../styles/cards.module.css"
import { useSelector } from "react-redux/";

export function Cards(props){

    const pokemons = useSelector((state) => state.pokemons)

    if(pokemons){
        console.log(pokemons)
return(<div className={style.cards}>
     {pokemons.map((e)=>{
    return(
        <Card key={e.id}
        name = {e.name}
         ability = {e.abilities[0].ability.name}
        img = {e.sprites.other["official-artwork"].front_default}
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
        no hay nada chamigo
    </div>
}
}

/* {props.cities.map((e)=>{
        return(
            <Card
            name = {e.name}
            />
        )
    })*/ 