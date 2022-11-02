import React from "react";
import {Card} from "./Card.jsx";
import { useEffect } from "react";
import style from "../styles/cards.module.css"
import { useDispatch, useSelector } from "react-redux/";
import { filterOrigin, getAll, sortPokemons } from "../redux/actions/index.js";
import pikachu from "../images/pikachu-running.gif"
import { Filter } from "./Filter.jsx";
import { useState } from "react";
import { Pages } from "./Pages.jsx";

export function Cards(props){

    const pokemons = useSelector((state) => state.pokeList)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!pokemons.length){dispatch(getAll())}
    },[])

    useEffect(()=>{
        setCurrent(1)
    },[pokemons])

    const [current, setCurrent] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(15)
    const last = current * pokePerPage;
    const first = last - pokePerPage;
    const renderCokemons = pokemons.slice(first, last);
    const update = (e) =>{
        setCurrent(e)
    }
 
    if(pokemons.length){
return(
<main>
    <Pages
    currentPage={current}
    length={pokemons.length}
    updating={update}
    pokePerPage={pokePerPage}></Pages>
        <div className={style.cards}>
            {renderCokemons?.map((e)=>{
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
)}
else{
    return <div>
    <img className={style.pikachu} src={pikachu} alt="s" />
</div>       
}
     
}


