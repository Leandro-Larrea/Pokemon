import { GET_ALL, DELETE_POKEMON,GET_POKEMON, GET_POKEMON_DETAIL, GET_MOVE, GET_TYPES,
FILTER_TYPES, CLEAN_UP, POKE_NAMES, FILTER_NAMES,ADD_POKEMON, NOT_FOUND} from "../actions/index.js"

const initialState = {
    pokemons:[],
    pokeDetail:{},
    pokeList:[],
    pokeNames:[],
    pokeSearch:[],
    moveDetail:{},
    types:[]
}

export function rootReducer(state = initialState, action){
    switch (action.type){           
        case  GET_ALL:
            return{
                ...state,
                pokeList: action.payload
            }
        case NOT_FOUND:
            return{
                ...state,
                pokeList:["not found"]
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case FILTER_TYPES:
            return{
                ...state,
                pokeList: action.payload
            }
        case CLEAN_UP:
            return{
                ...state,
                [action.payload]: []
            }
        case GET_POKEMON:
            return{
                ...state,
                pokeList:[action.payload]
            }
        case POKE_NAMES:
            return{
                ...state,
                pokeNames: action.payload
            }
        case FILTER_NAMES:
            
            let names =  state.pokeNames.filter(e => e.startsWith(action.payload.toLowerCase()))
            names.splice(10)
            if(names[0] === action.payload || action.payload.length === 0) names = []
            return{
                ...state,
                pokeSearch: names
            }
        case  DELETE_POKEMON:
            return{
                ...state,
                pokemons: state.pokemons.filter(e => e.id !== action.payload)
            }
        case GET_POKEMON_DETAIL:
           return{
            ...state,
            pokeDetail: action.payload
           }
        case GET_MOVE:
            return{
                ...state,
                moveDetail: action.payload
            }
        case ADD_POKEMON:
            return{
                ...state,
                pokeList: [...state.pokeList, action.payload]
            }
         
            default: 
            return state
    }
}

