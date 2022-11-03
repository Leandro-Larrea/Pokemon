import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions";
import style from "../styles/form.module.css"

export const Form = ()=>{

    const dispatch = useDispatch();
    const types = useSelector(state=> state.types)

    useEffect(()=>{
        if(!types.length) dispatch(getTypes())
    },[])

    const [info, setInfo] = useState({
        name:"",
        image:"", 
        id:"", 
        hp:"",
        attack:"",
        defense:"",
        specialAttack:"",
        specialDefense:"",
        speed:"",
        types:[]            
    })

    const handleChange = (e)=>{
        console.log(info)
        if(e.target.name === "types"){
            info.types.includes(e.target.value)? setInfo({...info,
                 types: info.types.filter(a=> a !== e.target.value)}):
                 setInfo({...info,
                types: info.types.concat(e.target.value)})
                return     
        }
        setInfo({...info,
        [e.target.name]:e.target.value})
    }


    return(
        <main className={style.main}>
            <form className={style.form}>
                <div className={style.itemContainer}>
                    <div className={style.item}>
                        <label htmlFor="name">Name</label>
                        <input onChange={handleChange} className={style.input} name="name" type="text" value={info.name}></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="image">Image</label>
                        <input onChange={handleChange} className={style.input} name="image" type="text" value={info.image}></input>
                    </div>
                </div>
                <div className={style.itemContainer}>
                <div className={style.item}>
                        <label htmlFor="hp">HP</label>
                        <input onChange={handleChange} className={style.input} name="hp" type="range" value={info.hp} ></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="df">DF</label>
                        <input onChange={handleChange} className={style.input} name="df" type="range" value={info.defense}></input>
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
                </div>
                <div className={style.item}>
                <div className={style.checksContainer}>
                {types.length && types.map((g,i) => {
                                return(
                                    <div key={g.name} className={style.itemCheck}>
                                        <label key={g.name + 1} className={style.checkLabel} htmlFor={g.name}>{g.name}
                                        </label>
                                        <input onClick={handleChange} name ="types" type="checkbox" value={g.name} className={style.check}  key={i}>
                                        </input>
                                    </div>
                                        )   
                                    }
                                )
                            }
                </div>
                </div>
            </form>
        </main>
    )
}