import { GET_ALL, GET_POKEMON, DELETE_POKEMON, CATCH_POKEMON, GET_POKEMON_DETAIL } from "../actions/index.js"


const initialState = {
    pokemons:[],
    pokeDetail: {},
    pokeball:[],
    pokeList:[]
}

export function rootReducer(state = initialState, action){
    switch (action.type){           
        case  GET_ALL:
            return{
                ...state,
                pokeList: action.payload
            }
        case  CATCH_POKEMON:
            return{
                ...state,
                pokeball: [...state.pokeball, state.pokemons.filter(a => a.id == action.payload)[0]]
            }
        case GET_POKEMON:
            if(!state.pokemon){
                return{
                    ...state,
                pokemons: [action.payload, ...state.pokemons],
                pokeDetail: action.payload
                }
            }
            else{
            return{
                ...state,
                pokemons: [action.payload, ...state.pokemons]
            }
        }
        case  DELETE_POKEMON:
            return{
                ...state,
                pokemons: state.pokemons.filter(e => e.id !== action.payload)
            }
        case GET_POKEMON_DETAIL:
            console.log(state.pokemons[0].id + action.payload)
           return{
            ...state,
            pokeDetail: state.pokemons.filter(a => a.id == action.payload)[0]
           }
         
            default: 
            return state
    }
}

