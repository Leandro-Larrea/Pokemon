import React from "react";
import {Search} from "./SearchBar.jsx";
import style from "../styles/nav.module.css";
import pokeball from "../images/pokeball.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterOrigin, getAll, pokeNames, sortPokemons } from "../redux/actions/index.js";
import { useEffect } from "react";
import { Filter } from "./Filter.jsx";
import { useState } from "react";
import { Aside } from "./Aside.jsx";


export function Nav(props){
 const dispatch = useDispatch();
 const names = useSelector((state) => state.pokeNames)

const [ c, setC ] = useState(0)
const [ d, setD ] = useState(0)

 const f = ()=>{
    c === 0? setC(1): setC(0)
}
 
 useEffect(()=>{
    if(!names.length){
    dispatch(pokeNames())}
 },[])

const origin = (e)=>{
    dispatch(filterOrigin(e.target.value))
}

const sort = (e) =>{
    setC(0)
    dispatch(sortPokemons(e.target.value))
}

const enableFilters = ()=>{
    setC(0)
    setD(1)
}

const windowSize =()=>{
    console.log("asd")
}

const [windowWith, setWindowWidth] = useState();

useEffect(()=>{
    function handleResize(){
        setWindowWidth(getWidth)
    }
    window.addEventListener("resize", handleResize)
    return()=>{window.removeEventListener("resize",windowSize)}
},[])

useEffect(()=>{
    windowWith <= 700 && c === 1 && setC(0)
},[windowWith])

const getWidth = ()=>{
    return window.innerWidth
}

    return(
        <main className={style.main}>
            <div className={style.navHover}>
                <div className={style.buttons}>
                    <NavLink className={style.link} to="/poke/home">Home</NavLink>
                    <NavLink className={style.link} to="/poke/post">Post</NavLink>
                    <a onClick={f} className={style.filters}>| | |</a>
                </div>
                <img className={ style.logo} src={pokeball}/>
                <Search/>
                <div className={ c === 1? style.asideResponsive: style.asideResponsiveOff }>
                    <div className={style.center}>
                         <NavLink onClick={()=> setC(0)} style={{textDecoration:"none" ,color:"white"}} to="/poke/home">
                            Home
                        </NavLink>
                        <NavLink onClick={()=> setC(0)} style={{textDecoration:"none" ,color:"white"}} to="/poke/post">
                            Post
                        </NavLink> 
                        <button className={style.sort} onClick={sort} value="AZ">Sort by A-Z</button>
                        <button className={style.sort} onClick={sort} value="ZA">Sort by Z-A</button>
                        <button className={style.sort} onClick={sort} value="attackHigher">Sort by high Attack </button>
                        <button className={style.sort} onClick={sort} value="attackLower">Sort by less Attack</button>
                        <button onClick={origin} value="api" className={style.sort}>Filter by Api</button>
                        <button className={style.sort}>Filter by Db</button>
                        <button onClick={enableFilters} className={style.sort} >Filter by types</button>   
                    </div>
                </div>
                <div className={ d === 1? style.asideResponsive: style.asideResponsiveOff }>
                    <div className={style.center}> 
                         <Filter d={true} setD={setD}></Filter>
                    </div>
                </div>
            </div>
        </main>
)
}
     