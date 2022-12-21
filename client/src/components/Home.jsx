import React, { useEffect, useState } from "react";
import { Aside } from "./Aside";
import { Cards } from "./Cards";
import style from "../styles/cards.module.css"

export const Home = ()=>{

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      
      window.addEventListener('resize', handleWindowResize);
      
      return () => {
          window.removeEventListener('resize', handleWindowResize);
      };
  }, []);
  
    function getWindowSize() {
      const innerWidth = window.innerWidth;
      return innerWidth
    }
    return(
        <div className={style.main}>
            {  windowSize > 700?<Aside></Aside>:null  }
            <Cards></Cards>
        </div>
    )
}