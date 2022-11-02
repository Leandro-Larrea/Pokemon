import React from "react";
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

    return(
        <main className={style.main}>
            <form className={style.form}>
                <div className={style.itemContainer}>
                    <div className={style.item}>
                        <label htmlFor="Name">Name</label>
                        <input className={style.input} for="Name" type="text"></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="Image">Image</label>
                        <input className={style.input} for="Image" type="text"></input>
                    </div>
                </div>
                <div className={style.itemContainer}>
                <div className={style.item}>
                        <label htmlFor="hp">HP</label>
                        <input className={style.input} name="hp" type="range"></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="DF">DF</label>
                        <input className={style.input} name="DF" type="range"></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="ATK">ATK</label>
                        <input className={style.input} name="ATK" type="range"></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="SPA">SPA</label>
                        <input className={style.input} name="SPA" type="range"></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="SPD">SPD</label>
                        <input className={style.input} name="SPD" type="range"></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="Speed">Speed</label>
                        <input className={style.input} name="Speed" type="range"></input>
                    </div>
                </div>
                <div className={style.item}>
                <div className={style.checksContainer}>
                {types.length && types.map((g,i) => {
                                return(
                                    <div key={g.name} className={style.itemCheck}>
                                        <label key={g.name + 1} className={style.checkLabel} htmlFor={g.name}>{g.name}
                                        </label>
                                        <input  name ={g.name} type="checkbox" value={g.name} className={style.check}  key={i}>
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