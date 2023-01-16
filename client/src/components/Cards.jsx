import React from "react";
import {Card} from "./Card.jsx";
import { useEffect } from "react";
import style from "../styles/cards.module.css"
import { useDispatch, useSelector } from "react-redux/";
import { cleanUp, filterOrigin, getAll, sortPokemons } from "../redux/actions/index.js";
import pikachu from "../images/pikachu-running.gif"
import { Filter } from "./Filter.jsx";
import { useState } from "react";
import { Pages } from "./Pages.jsx";
import pikachuSad from "../images/background/pikachuSad.png"

export function Cards(props){

    const pokemons = useSelector((state) => state.pokeList)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!pokemons.length){dispatch(getAll())}
        return ()=>{
            dispatch(cleanUp("pokeList"))
        } 
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
    
    const ok = ()=>{
        dispatch(cleanUp("pokeList"))
       dispatch(getAll())
    }

    if(pokemons.length && pokemons[0] !== "not found"){     
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
                    types = {!e.createdAtDb?e.types.map(e=> e.type):e.types}
                    />
                    )
                }   
            )
            }  
    </div>
</main>       
)}
if(pokemons[0] === "not found"){
   return(
    <div className={style.notFoundContainer}> 
        <div className={style.notFound}>
            <img src={pikachuSad} className={style.pikachuSad}>
            </img>
            <div className={style.notFoundTextContainer}>
            <h2 className={style.notFoundText}>Pokemon not found</h2>
            <h3 className={style.notFoundText}>Try picking a name from the search bar</h3>
            <button onClick={ok}>
                OK
            </button>
            </div>
         </div>
    </div>
   )
}
else{
    return  <div className={style.loader}>
                <img className={style.pikachu} src={pikachu} alt="s" />
            </div>       
}
     
}


