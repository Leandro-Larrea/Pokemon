import React from "react";
import {Card} from "./Card.jsx";
import style from "../styles/cards.module.css"
export function Cards(props){
    if(props.pokemons.length > 0){
        console.log(props.cities)
        
return(<div className={style.cards}>
     {props.pokemons.map((e)=>{
    return(
        <Card
        name = {e.name}
         abilitie = {e.abilities[0].ability.name}
        img = {e.image}
        id = {e.id}
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