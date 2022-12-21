import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getTypes, pokePost } from "../redux/actions";
import style from "../styles/form.module.css"


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
        image:"", 
        hp:"",
        attack:"",
        height:"",
        weight:"",
        defense:"",
        specialAttack:"",
        specialDefense:"",
        speed:"",
        type:[]            
    })

    useEffect(()=>{
        validation()
        console.log(error)
    },[info])

    const [error, setError] = useState({})

    const handleChange = (e)=>{
        console.log(info)
        if(e.target.name === "type"){
            info.type.includes(e.target.value)? setInfo({...info,
                 type: info.type.filter(a=> a !== e.target.value)}):
                 setInfo({...info,
                type: info.type.concat(e.target.value)})
                return     
        }
        setInfo({...info,
        [e.target.name]:e.target.value})
    }

    const submit = async (e)=>{
        e.preventDefault()
        if(Object.values(error).filter(e => e!== null).length) return alert("fill each field")
        await dispatch(pokePost(info))
        history.push("/")
        
    }

    function validation (){
        let box = {};
        !/(\w*)\b([A-Z][a-z]\w*)\b(\w*)/.test(info.name) || info.name.length > 40? box.name = true:
         box.name =  null;
        info.type.length? box.type = null: box.type = true
        setError({...box})
    }

    return(
        <main className={style.main}>
            <form className={style.form} onSubmit={submit}>
                <div className={style.itemContainer}>
                    <div className={style.item}>
                        <label htmlFor="name">Name</label>
                        <input onChange={handleChange} className={error.name?style.errorI:style.input} name="name" type="text" value={info.name}></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="image">Image</label>
                        <input onChange={handleChange} className={style.input} name="image" type="text" value={info.image}></input>
                    </div>
                </div>
                <div className={style.itemContainer}>
                { <div className={style.item}>
                        <label htmlFor="hp">HP</label>
                        <input onChange={handleChange} className={style.input} name="hp" type="range" value={info.hp} ></input>
                    </div> }
                    <div className={style.item}>
                        <label htmlFor="df">DF</label>
                        <input onChange={handleChange} className={style.input} name="defense" type="range" value={info.defense}></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="attack">ATK</label>
                        <input onChange={handleChange} className={style.input} name="attack" type="range" value={info.attack}></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="specialAttack">SPA</label>
                        <input onChange={handleChange} className={style.input} name="specialAttack" type="range" value={info.specialAttack}></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="specialDefense">SPD</label>
                        <input onChange={handleChange} className={style.input} name="specialDefense" type="range" value={info.specialDefense}></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="speed">Speed</label>
                        <input onChange={handleChange} className={style.input} name="speed" type="range" value={info.speed}></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="weight">weight</label>
                        <input onChange={handleChange} className={style.input} name="weight" type="range" value={info.weight}></input>
                    </div> <div className={style.item}>
                        <label htmlFor="height">height</label>
                        <input onChange={handleChange} className={style.input} name="height" type="range" value={info.height}></input>
                    </div>
                </div>
                <div className={style.item}>
                <div className={error.type? style.error:style.checksContainer}>
                {types.length && types.map((g,i) => {
                                return(
                                    <div key={g.name} className={style.itemCheck}>
                                        <label key={g.name + 1} className={style.checkLabel} htmlFor={g.name}>{g.name}
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
                <button style={{
                    width:"100px" ,margin: "auto", background: "transparent",borderColor:"white",color:"white", cursor: "pointer"
                    }} 
                type="subimit">Submit</button>
            </form>
        </main>
    )
}