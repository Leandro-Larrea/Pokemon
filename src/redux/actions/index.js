import axios from "axios";
export const GET_ALL = "GET_ALL";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_POKEMON = "GET_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const CATCH_POKEMON = "CATCH_POKEMON";
export const GET_MOVE = "GET_MOVE";
export const GET_TYPES = "GET_TYPES"


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
    console.log(b)
    dispatch({type: GET_ALL, payload: b})
})

export const getTypes = () => dispatch =>
fetch("http://localhost:3001/types")
.then(a => a.json())
.then(b => {console.log(b.results)
    dispatch({type:GET_TYPES, payload: b.results})
})



 export const getPokemon = (name) => {
     return (dispatch) =>{
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
 .then(answer => answer.json())
 .then(eso =>{
    console.log("eso llego")
     dispatch({type: GET_POKEMON, payload: eso})})   
}}

export const getPokemonDetail = (id) =>{
    return{
        type: GET_POKEMON_DETAIL,
        payload: id
    }
}

export const buscador = (exp) => (dispatch) =>{
    
}

 export const catchPokemon = (id) => {
 return {
    type: CATCH_POKEMON,
    payload: id
    }
}

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
/*terminar barra de busqueda*/






