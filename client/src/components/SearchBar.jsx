import React from "react";
import { useState } from "react";
import style from "../styles/searchBar.module.css";
import { getPokemon, getAll, filterNames, cleanUp } from "../redux/actions/index.js";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";


export function Search(props){

    const dispatch = useDispatch();
    const pokemons = useSelector((state)=> state.pokeList)
    const pokeNames = useSelector((state)=> state.pokeSearch)
    const [text, setText] = React.useState("");
    const [options, setOptions] = useState([]);
    const [count, setCount] = useState(null);
    const recomendations = useRef(null);
    const bar = useRef(null)
    const location = useLocation()
    const navigate = useHistory()
    function handleText(e){
    setText(e.target.value);   
    }

    const move = (e)=>{
        console.log(e.key)
        if(e.key === "ArrowDown") {
            e.preventDefault()
           if(recomendations.current.childNodes.length){ 
            recomendations.current.focus() 
            setCount(0)
        }
        }
        if(e.key === "ArrowUp") {
            e.preventDefault()
           if(recomendations.current.childNodes.length){ 
            recomendations.current.focus() 
            setCount(recomendations.current.childNodes.length-1)
        }
        }
    }

    const move2 = (e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            setText(recomendations.current.childNodes[count].textContent)
            setCount(null)
            bar.current.focus()
        }
        if(e.key === "ArrowDown") {
            e.preventDefault()
            if( count === null) {setCount(0)}
            else 
            if(count < recomendations.current.childNodes.length -1) {setCount(count +1)}
            else{
                setCount(null)
                bar.current.focus()
            }  
        }
        if(e.key === "ArrowUp") {
            e.preventDefault()
            if( count === null) {setCount(0)}
            else 
            if(count >  0) setCount(count -1)
            else{
                setCount(null)
                bar.current.focus()
            }
        }
        else{
            bar.current.focus()
        }
    }

   useEffect(()=>{
    if(count !== null)recomendations.current.childNodes[count].focus()
   },[count])

    useEffect(()=>{
        dispatch(filterNames(text))
    },[text])
 
    const sub = async(e)=> {
    e.preventDefault();
    const numb = /\d/;
    alert("leandro hizo esto")
    if(text.length === 0){return}
    dispatch(cleanUp("pokeList"))
    
    //     if(numb.test(text)){
        //         let a = pokemons.find(p => p.id == text)
        //         if(a){alert("that pokemon it's already in front of you!");
        //         setText("")
//          return}
//     } else{
//     let r = pokemons.findIndex(p => p.name === text)
//     if(r !== -1){alert("that pokemon it's already in front of you!");
//     setText("")
//     return
// }}

await dispatch(getPokemon(text))
if(location.pathname !== "/") await navigate.push("/")
    setText("")
    }

    const ayudin = (e)=>{
        e.preventDefault()
        setText(e.target.value)
        bar.current.focus()
    }

    return(
        <form className={style.container} onSubmit={sub}>      
            <div className={style.position}>
                <input className={style.input} type="text" onKeyDown={move} ref={bar} onChange={handleText} tabIndex={0} value={text}></input>
                <div className={pokeNames.length? style.options: style.optionsOff} onKeyDown={move2} tabIndex={0} ref={recomendations}>
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

