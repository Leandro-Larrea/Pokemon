import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonDetail, catchPokemon, cleanUp } from "../redux/actions/index.js";
import style from "../styles/data.module.css";
import {Moves} from "./Moves.jsx"
import pikachu from "../images/pikachu-running.gif"

export function Data(props){
    const dispatch = useDispatch();
    const datos = useSelector((state) => state.pokeDetail)
    const curiosidad = useSelector((state) => state.pokeball)
    const id = props.match.params.id

    useEffect(()=>{
        dispatch(getPokemonDetail(id))
        return ()=> dispatch(cleanUp("pokeDetail"))
    },[]);

    const add = () =>{
        let r = curiosidad.findIndex(p => p.name === datos.name)
    if(r !== -1){
        window.alert("This pokemon it's already into favorites")
        return}
        dispatch(catchPokemon(id))
    }
    
    let skill = null
    const sub = (e) =>{
        e.preventDefault()
         skill = document.getElementById("select").value
    }
 if(Object.values(datos).length){ 
    return(
        <main className={style.main}> 
            <div className={style.container}>
                <div className={style.buttonContainer}>  
                    <h1 className={style.name}>{datos.name}!!</h1>    
                </div>
                <section className={style.datosContainerContainer}>
                    <div className={style.datosContainer}>
                        <h4 className={style.order}> Height : {datos["height"]}</h4>
                        <h4 className={style.order}> Weight : {datos["weight"]}</h4>           
                        <div className={style.abilities}>
                            <h4>Abilities</h4>
                            {datos.createdAtDb? <p>none</p>:datos.abilities?.map((a,i)=>  <div key= {i}>{a.name}</div>)} 
                        </div>
                        <div className={style.icosContainer}>
                            {datos.types?.map(p =>
                                <div>
                                    <div className={style.icoContainer}><img className={style.ico} src={require(`../images/type-icons/Pokémon_${p.name}_Type_Icon.svg.png`)}>
                                    </img><p className={style.icoName}>{p.name}</p></div>       
                                </div>
                                )
                            }
                        </div>
                        <p>Attack:{datos.attack}</p>
                        <p>Hp:{datos.hp}</p>
                        <p>Def:{datos.defense}</p>
                        <p>Spa:{datos["special-attack"]}</p>
                        <p>Spd:{datos["special-defense"]}</p>
                        <p>Speed:{datos.speed}</p>
                    </div> 
                </section>
                <div className={datos.types.map(e=> e.name).includes("watter")?style.imageContainerWater:style.imageContainer}>  
                   {<img className={style.image} src={datos.image} alt="asdasd"/>}
                </div>  
            </div>                  
        </main>
    )}
         return  <div className={style.loader}>
    <img className={style.pikachu} src={pikachu} alt="s" />
</div>       
}



