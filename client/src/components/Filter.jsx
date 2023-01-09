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
        if(props.d) props.setD(0)
        dispatch(cleanUp("pokeList"))
        dispatch(filterTypes(e.target.value))
        history.location.pathname !== "/" && history.push("/poke/home")
    }
    
    if(types.length){
        return (<div className={props.c === 0? style.hoverOff: props.d? style.hoverD:style.hover}>
                    <div className={style.container}>
                        <div className={style.selectContainer}>
                            {props.d == 1 &&
                            <div className={style.close}>
                                <button onClick={()=> props.setD(0)}>x</button>
                            </div>} 
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