import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonDetail } from "../redux/actions/index.js";
import style from "../styles/data.module.css";


export function Data(props){
    const dispatch = useDispatch();
    const datos = useSelector((state) => state.pokeDetail)

    useEffect(()=>{
        dispatch(getPokemonDetail(props.match.params.id))
    },[]);
 
    return(
        <div className={style.container}> 
            {console.log(datos)}
            <h2 className={style.name}>{datos.name}</h2>
            <h3 className={style.order}> order : {datos.order}</h3> 

            {datos.abilities?.map((a,i)=>  <React.Fragment key={i}><p>{a.ability.name}</p></React.Fragment>)}  

             <div className={style.imageContainer}> 
               {
              <img src={datos.sprites.other["official-artwork"].front_default} alt="asdasd"/>}     
              </div>  

             <div className={style.movesContainer}>
             {datos.moves && datos.moves.map((a,i) => <p key={i}>{a.move.name}</p>)}
               
            </div>   
           
        </div>
    )
}


