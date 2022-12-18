import axios from "axios";
export const GET_ALL = "GET_ALL";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_POKEMON = "GET_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const CATCH_POKEMON = "CATCH_POKEMON";
export const GET_MOVE = "GET_MOVE";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPES = "FILTER_TYPES";
export const CLEAN_UP = "CLEAN_UP";
export const POKE_NAMES = "POKE_NAMES";
export const CLEAN_UP2 = "CLEAN_UP2";
export const FILTER_NAMES = "FILTER_NAMES";
export const ADD_POKEMON = "ADD_POKEMON";

//  export const getAll = () => async(dispatch) => {
//   return await axios.get("http://localhost:3001/pokemons")
//   .then(asd =>{ 
//     console.log(asd)
//      dispatch({type: GET_ALL, payload: asd.data})
//   })
// } 

export const getAll = () => dispatch =>
fetch("http://localhost:3001/pokemons")
.then(a => a.json())
.then(b =>{
    dispatch({type: GET_ALL, payload: b})
})

export const getTypes = () => dispatch =>
fetch("http://localhost:3001/types")
.then(a => a.json())
.then(b => { 
    dispatch({type:GET_TYPES, payload: b})
})

export const filterTypes = (type) => dispatch => 
fetch(`http://localhost:3001/types?type=${type}`)
.then(a => a.json())
.then(b => {
    dispatch({type: FILTER_TYPES, payload: b})
})

export const cleanUp = (a) => dispatch => {dispatch({type:CLEAN_UP, payload: a})}

export const getPokemonDetail = (id) =>{ return (dispatch)=>
    fetch(`http://localhost:3001/pokemons/${id}`)
    .then(asd => asd.json())
    .then(a =>{
        dispatch({
            type: GET_POKEMON_DETAIL,
            payload: a
        })
    })
}

export const pokeNames = ()=> async dispatch =>
await axios.get(`http://localhost:3001/pokemons/names`)
.then(a => {
    dispatch({type:POKE_NAMES, payload: a.data})
})

export const filterOrigin = (type) => async dispatch =>
await axios.get(`http://localhost:3001/pokemons/origin/${type}`)
.then(a => {
    dispatch({type: FILTER_TYPES, payload: a.data})
})

 export const getPokemon = (name) => {
     return async(dispatch) =>{
    return await axios.get(`http://localhost:3001/pokemons?name=${name}`)
 .then(eso =>{
     dispatch({type: GET_POKEMON, payload: eso.data})})   
}}

export const filterNames = (str) => dispatch => dispatch({type: FILTER_NAMES, payload: str})



 export const catchPokemon = (id) => {
 return {
    type: CATCH_POKEMON,
    payload: id
    }
}

export const sortPokemons = (sort)=> dispatch =>
fetch(`http://localhost:3001/pokemons/sort?type=${sort}`)
.then(a => a.json())
.then(b => {
    dispatch({type:FILTER_TYPES, payload:b})
})

export const deletePokemon = (id) =>{
    return{
        type: DELETE_POKEMON,
        payload: id
    }
}

export const moveDetail = (move) => {
    return (dispatch)=>{
        fetch(`https://pokeapi.co/api/v2/move/${move}/`)
        .then(eso => eso.json())
        .then(detail =>{
            dispatch({type: GET_MOVE, payload: detail})     
        })
    }
}

export const pokePost = (pokemon) => async dispatch =>{
    console.log(pokemon)
await axios.post(`http://localhost:3001/pokemons`,pokemon)
.then(a=> { console.log(a.data)
    dispatch({type: ADD_POKEMON, payload:a.data})
})
.catch(error => console.log(error))}






