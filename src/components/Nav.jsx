import React from "react";
import {Search} from "./SearchBar.jsx";
import style from "../styles/nav.module.css";
import pokeball from "../images/pokeball.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAll, pokeNames } from "../redux/actions/index.js";
import { useEffect } from "react";
import { Filter } from "./Filter.jsx";
import { useState } from "react";



export function Nav(props){
 const dispatch = useDispatch();
 const names = useSelector((state) => state.pokeNames)
 
 useEffect(()=>{
    if(!names.length){
    dispatch(pokeNames())}
 },[])

 const [c, setC] = useState(0)

 const fff = (e)=>{
    c === 0? setC(1): setC(0)
}

    return(
    <div className={style.navHover}>
    <nav className={style.nav}>
        <div className={style.margin}>
            <div className={style.marginQuery}>
                <div className={style.rellenoBar}></div>
                <img className={style.logo} src={pokeball}/>
                <Search/>
            </div>
        </div>
        <div className={style.sortFilters}>
            <div className={style.position}>
                <div onClick={fff} className={c=== 0?style.sortContainerFilter: style.sortContainerFilterOn}>
                    <div  className={style.sortText}>
                        <a className={c === 1? style.aOn: style.aOff}>Filter types</a>
                    </div>
                </div>
                <Filter match={props.match} c={c} origin={true}></Filter>
            </div>   
        </div>
       
    </nav>
</div>
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
