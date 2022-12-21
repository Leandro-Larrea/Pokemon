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

 const f = ()=>{
    c === 0? setC(1): setC(0)
}
 
 useEffect(()=>{
    if(!names.length){
    dispatch(pokeNames())}
 },[])

const origin = (e)=>{
    console.log(e.target.value)
    dispatch(filterOrigin(e.target.value))
}

const sort = (e) =>{
    dispatch(sortPokemons(e.target.value))
}

    return(
        <main className={style.main}>
            <div className={style.navHover}>
                <div className={style.buttons}>
                <NavLink to="/"><a>Home</a></NavLink>
                <NavLink to="/post"><a>Post</a></NavLink>
                <a onClick={f} className={style.filters}>Filters</a>
                </div>
                    <img className={ style.logo} src={pokeball}/>
                    <Search/>
                    <div className={ c === 1?style.asideResponsive: style.asideResponsiveOff}>
                        <div className={style.center}>
                            <button className={style.sort} onClick={sort} value="AZ">Sort by A-Z</button>
                            <button className={style.sort} onClick={sort} value="ZA">Sort by Z-A</button>
                            <button className={style.sort} onClick={sort} value="attackHigher">Sort by high Attack </button>
                            <button className={style.sort} onClick={sort} value="attackLower">Sort by less Attack</button>
                            <button onClick={origin} value="api" className={style.sort}>Filter by Api</button>
                            <button className={style.sort}>Filter by Db</button>
                            <button className={style.sort} >Filter by types</button>
                        </div>
                    </div>
                </div>
        </main>
)
}
     

// <Search/>
// <NavLink className={style.options}
// to="/favorites"
// >
// <p className={style.options}>Favorites</p>
// </NavLink>
// <Link
// to="/">
// <img className={style.img} src={pokeball}/>
// </Link>
