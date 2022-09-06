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
        dispatch(catchPokemon(id))
        console.log(curiosidad)
    }
 
    return(
        <main className={style.container}> 
            <div className={style.buttonContainer}>    
                <button onClick={add} className={style.favorites}>Add to favorites</button>   
            </div>
            <div className={style.datosContainer}>
                {console.log(datos)}

                    <h2 className={style.n}></h2>
                    <h2 className={style.name}>{datos.name}</h2>
                
                <h3 className={style.order}> order : {datos.order}
                </h3>
                
               
                <div className={style.abilities}>
                    <h3>Abilities</h3>
                    {datos.abilities?.map((a,i)=>  <React.Fragment key= {i}><p>{a.ability.name}</p></React.Fragment>)} 
                </div>
            </div> 

             <div className={style.imageContainer}> 
               {<img className={style.image} src={datos.sprites.other["official-artwork"].front_default} alt="asdasd"/>}     
              </div>  

             <div className={style.movesContainer}>
             {datos.moves && datos.moves.map((a,i) => <p key={i}>{a.move.name}</p>)}
               
            </div>   
           
        </main>
    )
}


