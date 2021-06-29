import { useState } from 'react';

const Sugeridos = () => {

  const [sugeridos, setSugeridos] = useState([]);
  
  const getSugeridos = (pokemons, pokedex) => {
    console.log({pokemons, pokedex});
    let pokemonsSugeridos = [];

    pokemons.forEach( (pokeNuevo) => {
      pokedex.forEach( poke => {
        console.log(pokemonsSugeridos.lenght <= 3 , pokeNuevo.name !== poke.name);
        if(pokemonsSugeridos.length < 3 && pokeNuevo.name !== poke.name){
          pokemonsSugeridos = [...pokemonsSugeridos, pokeNuevo.name]
        }
      })
    })

    // setSugeridos(pokemonsSugeridos);

  }

  return [sugeridos, getSugeridos];
}
 
export default Sugeridos;