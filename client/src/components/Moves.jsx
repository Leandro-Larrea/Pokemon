import React, { Component } from "react";
import { connect } from "react-redux";
import { moveDetail } from "../redux/actions";
import style from "../styles/moves.module.css"


export class Moves extends Component{ 
        
    componentDidMount(){
        this.props.moveDetail(this.props.move)
    }

     render(){
         return  (
             <section className={style.window}>
                  {this.props.move["flavor_text_entries"][0]["flavor_text"] && this.props.move["flavor_text_entries"][0]["flavor_text"] } 
             </section>
         )
     }
}

const mapStateToProps = state => {
    return{
        move: state.moveDetail
    }
}

const mapDispatchToProps = dispatch =>{
return{  
    moveDetail:move => dispatch(moveDetail(move)) 
}}

export default connect(mapStateToProps,
    mapDispatchToProps)(Moves)