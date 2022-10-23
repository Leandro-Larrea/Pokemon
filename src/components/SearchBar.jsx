import React from "react";
import { useState } from "react";
import style from "../styles/searchBar.module.css";
import { getPokemon, getAll, filterNames, cleanUp } from "../redux/actions/index.js";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

export function Search(props){

    const dispatch = useDispatch();
    const  pokemons = useSelector((state)=> state.pokeList)
    const   pokeNames = useSelector((state)=> state.pokeSearch)
    const [text, setText] = React.useState("");
    const [options, setOptions] = useState([]);


    function handleText(e){
    setText(e.target.value);   
    }

    useEffect(()=>{
        dispatch(filterNames(text))
    },[text])
 
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
    dispatch(cleanUp("pokeList"))
    dispatch(getPokemon(text))
    console.log(pokemons)
    setText("")
    }

    const ayudin = (e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setText(e.target.value)
    }

    return(
        <form className={style.container} onSubmit={sub}>      
            <div className={style.position}>
                <input className={style.input} type="text" onChange={handleText} value={text}></input>
                <div className={pokeNames.length? style.options: style.optionsOff}>
                    {text.length > 0 && pokeNames?.map((e,i)=> {
                    return <button onClick={ayudin} value={e} key={i + 100}>{e}</button>
                        }
                    )
                }
                </div>   
            </div>
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

