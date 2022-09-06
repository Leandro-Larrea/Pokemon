import React from "react";
import {Search} from "./SearchBar.jsx"
import style from "../styles/nav.module.css"
import pokeball from "../images/pokeball.png"
import { Link } from "react-router-dom"

export function Nav(props){
    return(
        <nav className={style.nav}>
            <Search/>
            <Link
            to="/favorites"
            >
            <p className={style.options}>Favorites</p>
            </Link>
            <Link
            to="/">
            <img className={style.img} src={pokeball}/>
            </Link>
            
            
        </nav>
    )
}