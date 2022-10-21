import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions";
import style from "../styles/Filter.module.css"

export function Filter(props){
    const dispatch = useDispatch()
    let types = useSelector(state=> state.types)
    useEffect(()=>{
        dispatch(getTypes())
    },[])

    const filtrar = ()=>{
        console.log("asdasd")
    }
    
    if(types.length){
        return (<div className={props.c === 1? style.hover: style.hoverOff}>
                    <div className={style.container}>
                        <div className={style.selectContainer}>   
                            <button className={style.option}  onClick={filtrar} value="Todos">Todos</button>
                                    {
                                    types?.map((e,i)=> <button key={i} onClick={filtrar} value ={e.name}className={style.option}>{e.name}</button>)
                                    }
                        </div>
                    </div>
                </div> 
                )        
            }
}