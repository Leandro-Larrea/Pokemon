import React, { Component } from "react";
import { connect } from "react-redux";
import {Card} from "./Card.jsx";
import style from "../styles/favorites.module.css"
import styleCard from "../styles/favorites.module.css"

export class Favorites extends Component{
 
    render(){
        return (
            <main className={style.main}>
                {this.props.pokemons?.map(e =>
                    <Card key={e.id}
                    name = {e.name}
                     ability = {e.abilities[0].ability.name}
                    img = {e.sprites.other["official-artwork"].front_default}
                    id = {e.id}/>                                 
                )}
            </main>
        );         
    };
};
function mapStateToProps(state){
    return{
        pokemons: state.pokeball
    }
 
}

export default connect(
    mapStateToProps,
    null
)(Favorites);