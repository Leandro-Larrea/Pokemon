import React from "react";
import {Search} from "./SearchBar.jsx";
import style from "../styles/nav.module.css";
import pokeball from "../images/pokeball.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../redux/actions/index.js";
import { useEffect } from "react";

export function Nav(props){
 const dispatch = useDispatch();
 const names = useSelector((state) => state.pokeList)
 useEffect(() =>{
    dispatch(getAll())
 },[])
    return(
        <nav className={style.nav}>
            <Search/>
            <NavLink className={style.options}
            to="/favorites"
            >
            <p className={style.options}>Favorites</p>
            </NavLink>
            <Link
            to="/">
            <img className={style.img} src={pokeball}/>
            </Link>
            
            
        </nav>
    )
}