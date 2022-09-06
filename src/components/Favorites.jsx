import React, { Component } from "react";
import { connect } from "react-redux";
import {Card} from "./Card.jsx";

export class Favorites extends Component{
 
    render(){
        return (
            <div>
                <h1>Favorites</h1>
                {this.props.pokemons?.map(e =>
                    <Card key={e.id}
                    name = {e.name}
                     ability = {e.abilities[0].ability.name}
                    img = {e.sprites.other["official-artwork"].front_default}
                    id = {e.id}/>                                 
                )}
            </div>
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