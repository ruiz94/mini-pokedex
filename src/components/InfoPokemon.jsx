import React from "react";

import whoIsthatPokemon from '../assets/img/quien-es-ese-pokemon.png';

const InfoPokemon = ({pokeInfo, formData}) => {
  const {name, types, weight, height} = formData;
  
  return ( 
    <div className="container-info">
      <div className="info-pokemon">
        <div className="container-img">
          <img src={pokeInfo ? pokeInfo.img : whoIsthatPokemon} alt="Pokemon" />
          <span className="name">{name ? name : 'Nombre: ---'}</span>
        </div>
        <p className="titulo-types">Tipo</p>
        <div className="types">
          {!types? <span>Sin tipo</span> : types.map((type, index) => <span key={index} className={type} >{type}</span> )}
        </div>
        <div className="stats">
          <div>Peso: {weight ? `${weight} Kg` : '---'}</div>
          <div>Altura: {height ? `${height} m` : '---'}</div>
        </div>
      </div>
    </div>
   );
}
 
export default InfoPokemon;