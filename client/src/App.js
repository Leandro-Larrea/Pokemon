import React from "react";
import {Card} from "./components/Card.jsx"
import {Nav } from "./components/Nav.jsx";
import { useState } from "react";
import {Cards} from "./components/Cards.jsx";
import style from "./styles/app.module.css";
import { Route, Switch, Link, useLocation} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {Data} from "./components/Data.jsx"
import { render } from "@testing-library/react";
import { Home } from "./components/Home.jsx";
import { Form } from "./components/Form.jsx";
import { Landing } from "./components/Landing.jsx";
import {location } from "react-router-dom"


/** Line 8:7:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. */
export default function App(){

 const location = useLocation()
    return(
        <div className={location.pathname === "/"?style.app: style.scroll}   >
        <React.Fragment>
        <Route exact path="/" component={Landing}/> 
        <Route path="/poke" component={Nav}/>
        <Route path="/poke/post" component={Form}/>
        <Route exact path="/poke/home" component={Home}/>
        <Route path = "/poke/datitos/:id"  component ={Data}/>
        </React.Fragment>
       </div>
    )
}
