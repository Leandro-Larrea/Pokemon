export const GET_ALL = "GET_ALL";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_POKEMON = "GET_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const CATCH_POKEMON = "CATCH_POKEMON";

// export const getAll = () => dispatch =>
//  fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
//  .then(answer => answer.json())
//  .then(asd =>{
//     dispatch({type: GET_ALL, payload: asd})
//  }) 

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
    return
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





