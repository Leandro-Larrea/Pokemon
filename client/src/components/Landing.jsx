import { NavLink } from "react-router-dom"
import style from "../styles/landing.module.css"
import { RenderSmoothImage } from "./ImageLoader"
import landingImg from "../images/background/pokeLanding.jpg";
import { useState } from "react";


export const Landing = () =>{

    const [loaded, setLoaded] = useState(false)

    return(
        <div className={loaded? style.landing: style.landingOff}>
            <img className={style.landingImg} src={landingImg} onLoad={()=>setLoaded(true)}></img>
                <div className={style.titleContainer}>
                    <h1 className={style.title}>Welcome To PokeApi</h1>
                    <NavLink to={"/poke/home"}>
                        <button className={style.button}>Lets Go!</button>
                    </NavLink>
                </div>
             <div className={!loaded? style.protector: style.protectorOff}></div>
        </div>
    )
}