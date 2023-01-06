import React from "react";
import {Card} from "./components/Card.jsx"
import {Nav } from "./components/Nav.jsx";
import { useState } from "react";
import {Cards} from "./components/Cards.jsx";
import style from "./styles/app.module.css";
import { Route, Switch, Link} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {Data} from "./components/Data.jsx"
import { render } from "@testing-library/react";
import { Home } from "./components/Home.jsx";
import { Form } from "./components/Form.jsx";

/** Line 8:7:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. */
export default function App(){

 

    return(
        <div className={style.app}>
        <React.Fragment> 
        <Route path="/" component={Nav}/>
        <Route path="/post" component={Form}/>
        <Route exact path="/" component={Home}/>
        <Route path = "/datitos/:id"  component ={Data}/>
        </React.Fragment>
       </div>
    )
}
