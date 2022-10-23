import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { cleanUp, filterTypes, getTypes } from "../redux/actions";
import style from "../styles/Filter.module.css"

export function Filter(props){
    const dispatch = useDispatch()
    const types = useSelector(state=> state.types)
    const history = useHistory()

    useEffect(()=>{
        dispatch(getTypes())
    },[])

    const filtrar = (e)=>{
        dispatch(cleanUp("pokeList"))
        dispatch(filterTypes(e.target.value))
        console.log(history)
        history.location.pathname !== "/" && history.push("/")
    }
    
    if(types.length){console.log("return", types)
        return (<div className={props.c === 1? style.hover: style.hoverOff}>
                    <div className={style.container}>
                        <div className={style.selectContainer}>   
                            <button className={style.option}  onClick={filtrar} value="todos">Todos</button>
                                    {
                                    types?.map((e,i)=> <button key={i} onClick={filtrar} value ={e.name}className={style.option}>{e.name}</button>)
                                    }
                        </div>
                    </div>
                </div> 
                )        
            }
            
}