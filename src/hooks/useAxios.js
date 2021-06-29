import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pokeInfo, setPokeInfo] = useState(null);

  useEffect( () => {
    setIsLoading(true);
    setPokeInfo(null);

    axios(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then( response => {

        if(!response.data.sprites) return;
        const {name, types, weight, height, sprites: {front_default: img}} = response.data;

        const pokemon = {
          name,
          types: types.map( el => el.type.name),
          weight,
          height,
          img
        }

        setPokeInfo(pokemon);
        setIsLoading(false);

      })
      .catch( error => {
        setIsLoading(false);
      })


  }, [search]);

  return [search, setSearch, pokeInfo, setPokeInfo, isLoading]
}
 
export default useAxios;