import React from "react";
import { useState } from "react";
import style from "../styles/searchBar.module.css";
import { getPokemon, getAll } from "../redux/actions/index.js";
import { useDispatch, useSelector } from 'react-redux';

export function Search(props){

    const dispatch = useDispatch();
    const  pokemons = useSelector((state)=> state.pokemons)

    const [text, setText] = React.useState("");
    function handleText(e){
    setText(e.target.value);   
    }
    console.log(props.match)
 
    const sub = (e)=> {
    e.preventDefault();
    const numb = /\d/;
    if(text.length === 0){return}
    if(numb.test(text)){
        let a = pokemons.find(p => p.id == text)
        if(a){alert("that pokemon it's already in front of you!");
        setText("")
         return}
    } else{
    let r = pokemons.findIndex(p => p.name === text)
    if(r !== -1){alert("that pokemon it's already in front of you!");
    setText("")
    return
}}
    dispatch(getPokemon(text))
    console.log(pokemons)
    setText("")
    }

    return(
        <form className={style.container} onSubmit={sub}>      
            <input className={style.input} type="text" onChange={handleText} value={text}></input>
            <button className={style.button} type="submit">Buscar</button>      
        </form>    
    )
}

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         getAll: ()=> dispatch(getAll()),
//         getPokemon: (name)=> dispatch(getPokemon(name))
//     }
// }

