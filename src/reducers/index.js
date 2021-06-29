
import { ADD_POKEMON } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: '',
  pokedex: [
    {
      id: 1,
      name: 'Groot',
      types: ['Wood'],
      weight: 56,
      height: 8,
      img: 'https://www.pngitem.com/pimgs/m/122-1223978_transparent-10-groot-png-images-collection-baby-groot.png'
    }
  ]
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        pokedex: [...state.pokedex, {...action.payload, id: state.pokedex.length + 1}]
      }
    default:
      return state;
  }
}

export default reducers;