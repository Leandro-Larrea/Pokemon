import { useState } from "react";
import style from "../styles/smoothImage.module.css";
import styles from "../styles/card.module.css"

export const RenderSmoothImage =({src, alt})=>{
    const [imageLoaded, setImageLoaded] = useState(false)

    return(
        <div className={styles.img}>
            <img
                src={src}
                alt={alt}
                className={imageLoaded? style.on: style.off}
                onLoad={()=> setImageLoaded(true)}
            />
            {!imageLoaded &&(
                <div className={style.loaderContainer}>
                    <span className={style.loader}>
                        Loading...
                    </span>
                </div>
            )}
        </div>
        
    )
}