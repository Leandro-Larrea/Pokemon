import { NavLink } from "react-router-dom"
import style from "../styles/landing.module.css"

export const Landing = () =>{
    return(
        <div className={style.landing}>
            <h1 className={style.title}>Welcome To PokeApi</h1>
            <NavLink to={"/poke/home"}>
                <button className={style.button}>Lets Go!</button>
            </NavLink>
        </div>
    )
}