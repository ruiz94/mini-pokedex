import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import NoPokemons from '../components/NoPokemons';
import Pokemon from '../components/Pokemon';

import '../assets/css/pokedex.scss';
import '../assets/css/typesColors.scss';

import logoPokedex from '../assets/img/Pokedex_logo.png'

const Pokedex = ({pokedex, isLoading}) => {

  if(isLoading) return <Loader/>;
  return (
    <div className="pokedex">
      
      <div className="btns-add">
        <Link className="btn crear" to="/createPokemon">Crear Pokemon</Link>
        <Link className="btn agregar" to="/addPokemon">Agregar Pokemon</Link>
      </div>
      <div className="title">
        <img src={logoPokedex} alt="Logo pokedex" />
      </div>
      {pokedex.lenght <= 0 ? <NoPokemons/> :
        <div className="pokemons">
          {pokedex.map( pokemon => (
            <Pokemon key={pokemon.id} {...pokemon} />
          ))
          }
        </div>
      }
    </div>
   );
}

const mapStateToProps = state => ({
  pokedex: state.pokedex,
  isLoading: state.isLoading
});

export default connect(mapStateToProps, ({}))(Pokedex);