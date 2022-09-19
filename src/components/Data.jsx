import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonDetail, catchPokemon } from "../redux/actions/index.js";
import style from "../styles/data.module.css";



export function Data(props){
    const dispatch = useDispatch();
    const datos = useSelector((state) => state.pokeDetail)
    const curiosidad = useSelector((state) => state.pokeball)
    const id = props.match.params.id
    useEffect(()=>{
        dispatch(getPokemonDetail(id))
    },[]);

    const add = () =>{
        let r = curiosidad.findIndex(p => p.name === datos.name)
    if(r !== -1){
        window.alert("This pokemon it's already into favorites")
        return}
        dispatch(catchPokemon(id))
        console.log(curiosidad)
    }
 
    return(
        <main className={style.container}> 

            <div className={style.buttonContainer}>  
            <h1 className={style.name}>{datos.name}</h1> 
             
                <button onClick={add} className={style.favorites}>Add to favorites</button>   
            </div>
                <div className={style.datosContainerContainer}>
                    <div className={style.datosContainer}>
                        {console.log(datos)}

                        <h3 className={style.order}> Order : {datos.order}</h3>
                        <h3 className={style.order}> Base experience : {datos["base_experience"]}</h3>
                        <h3 className={style.order}> Height : {datos["height"]}</h3>
                        <h3 className={style.order}> Weight : {datos["weight"]}</h3>   
                        <div className={style.abilities}>
                            <h3>Abilities</h3>
                            {datos.abilities?.map((a,i)=>  <React.Fragment key= {i}><p>{a.ability.name}</p></React.Fragment>)} 
                        </div>
                        <div className={style.icosContainer}>
                            {datos.types?.map(p => <div>
                         <div className={style.icoContainer}><img className={style.ico} src={require(`../images/type-icons/Pokémon_${p.type.name}_Type_Icon.svg.png`)}>
                            </img><p className={style.icoName}>{p.type.name}</p></div>       
                        </div> )}
                        </div>
                        <select className={style.selector}>{datos.moves && datos.moves.map((a,i) => <option key={i} className={style.option}>{a.move.name}</option>)} </select>
                    </div> 
                </div>
            <div className={datos.types[0].type.name === "water"?style.imageContainerWater:style.imageContainer}>  
               {<img className={style.image} src={datos.sprites.other["official-artwork"].front_default} alt="asdasd"/>}     
              </div>
              <div className={style.statsContainer}>
            {datos.stats?.map((s) => {
                   return <div className={style.stats}>
                            <p>{s["base_stat"]}</p>
                            <p>{s.stat.name === 'special-attack'?"Satk":s.stat.name === 'special-defense'?"Sdfs":
                            s.stat.name === 'speed'?"Spd": s.stat.name === 'defense'?"Dfs":
                            s.stat.name === 'attack'?"Atk":s.stat.name}</p>              
                        </div>
                        }
                    )}
            </div>                  
        </main>
    )
}


