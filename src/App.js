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

/** Line 8:7:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. */
export default function App(){

    const [pokemons, setPokemon] = useState([])

   function onSearch(pokemon){
   
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(esto =>  esto.json())
        .then((deEso) =>{
            if(deEso.name){
            let pokemon = {};
            pokemon.image = deEso.sprites.other["official-artwork"].front_default
            pokemon.name = deEso.name;
            pokemon.id = deEso.id;
            pokemon.abilities = deEso.abilities
            console.log(deEso.abilities[0].ability.name)
           setPokemon([...pokemons, pokemon])  
           console.log(deEso)
        } 
        
    })
    }
    
    function OnFilter(pokemonId){
      let x = pokemons.filter(pokemon => pokemon.id === parseInt(pokemonId))
      console.log(x)
      if(x.length > 0) {
        return x[0];
    } else {
        return null;
    }
        
    }

    return(
        <div className={style.app}>
      <Route
      path="/">  
           <Nav
     onSearch={onSearch}
     />
     </Route>   
    <Switch>
            <Route 
              path = "/datitos/:a" >
            {({match}) => <Data pokemon ={OnFilter(match.params.a)}/>} 
            </Route>
        <Route 
         exact path="/">
     <Cards pokemons ={pokemons}/>
     </Route>
     </Switch>
       </div>
    )
}
