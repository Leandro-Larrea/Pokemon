import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getTypes, pokePost } from "../redux/actions";
import style from "../styles/form.module.css"
import wrong from "../images/redCross.png"
import ok from "../images/ok-icon.png"

export const Form = ()=>{

const history = useHistory();
const location = useLocation();

    const dispatch = useDispatch();
    const types = useSelector(state=> state.types)

    useEffect(()=>{
        if(!types.length) dispatch(getTypes())
    },[])

    const [info, setInfo] = useState({
        name:"",
        img:"", 
        hp:0,
        attack:0,
        height:0,
        weight:0,
        defense:0,
        specialAttack:0,
        specialDefense:0,
        speed:0,
        type:[]            
    })

    const [interacting, setInteracting] = useState({
        name:null,
        stats:null,
        hp:null,
        attack:null,
        height:null,
        weight:null,
        defense:null,
        specialAttack:null,
        specialDefense:null,
        speed:null,
        types:null
    })

     useEffect(()=>{
         validation()
     },[info])

    const [error, setError] = useState({})

    const handleChange = (e)=>{
        if(e.target.name === "type"){
            setInteracting({...interacting, types: true})
            info.type.includes(e.target.value)? setInfo({...info,
                 type: info.type.filter(a=> a !== e.target.value)}):
                 setInfo({...info,
                type: info.type.concat(e.target.value)})
                return     
        }
        setInteracting({...interacting, [e.target.name]: true})
        setInfo({...info,
        [e.target.name]:e.target.value})
    }

    const submit = async (e)=>{
        e.preventDefault()
        if(Object.values(error).filter(e => e === ok ).length === 10){ 
        await dispatch(pokePost(info))
        alert("the pokemon has been created")
        history.push("/poke/home") }
        else{
            return alert("fill each field")
        }
    }

    function validation (){
        let box = {};
        if(interacting.name) !/(\w*)\b([A-Z][a-z]\w*)\b(\w*)/.test(info.name) || info.name.length > 40? box.name = wrong:
         box.name =  ok;
        if(interacting.types) info.type.length? box.types = ok: box.types = wrong
        Object.keys(info).filter(e=> e !== "name" && e !== "img" && e !== "type").forEach(e=> {if(interacting[e]) info[e] > 0? box[e]=ok: box[e]=wrong})
        setError({...box})
    }

    return(
        <main className={style.main}>
            <form className={style.form} onSubmit={submit}>
                <h1 className={style.formTitle}>Create your Pokemon</h1>
                <div className={style.rangeContainer}>
                    <div className={style.itemText}>
                        <label htmlFor="name">Name</label>
                        <img src={error.name} className={style.validationRange}></img>
                        <input onChange={handleChange} className={style.input} name="name" type="text" value={info.name}></input>
                    </div>
                    <div className={style.itemText}>
                        <label style={{gridColumn: "span 2"}} htmlFor="img">image</label>
                        <input onChange={handleChange} className={style.input} name="img" type="text" value={info.img}></input>
                    </div>
                </div>
                <div className={style.rangeContainer}>
                    <h2>Select Stats</h2>
                    {Object.keys(info).filter(e=> e !== "name" && e !== "img" && e !=="type").map((e,i) =>(
                        <div key={i} className={style.itemRange}>
                            <label htmlFor={e}>{e.slice(0,1).toUpperCase() + e.slice(1)}</label>
                            <img className={style.validationRange} src={error[e]}></img>  
                            <input onChange={handleChange} className={style.input} name={e} type="range" value={info[e]}></input>
                            <div className={style.inputValue}>{info[e]}</div>
                        </div>
                        )
                    )}
                </div>
                <div className={style.item}>
                <div className={error.type? style.error:style.checksContainer}>
                <h2>Select Type</h2>{error.types && <img className={style.validation} src={error.types}></img>}
                {types.length && types.map((g,i) => {
                                return(
                                    <div key={g.name} className={style.itemCheck}>
                                        <label key={g.name + 1} className={style.checkLabel} htmlFor={g.name}>{g.name.slice(0,1).toUpperCase() + g.name.slice(1)}
                                        </label>
                                        <input onClick={handleChange} name ="type" type="checkbox" value={g.name} className={style.check}  key={i}>
                                        </input>
                                    </div>
                                        )   
                                    }
                                )
                            }
                        </div>
                    </div>
                <button className={style.submit} 
                type="subimit">Submit</button>
            </form>
        </main>
    )
}