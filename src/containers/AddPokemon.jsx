import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addNewPokemon } from "../actions";

import useAxios from "../hooks/useAxios";

import '../assets/css/addPokemon.scss';
import '../assets/css/typesColors.scss';

import iconReturn from '../assets/img/return.png';
import rotom from '../assets/img/rotom.png';
import unounNotFound from '../assets/img/sin-pokemon.png';

import Loader from '../components/Loader';

import Modal from "../components/Modal";
import useModal from "../hooks/useModal";


const AddPokemon = ({pokedex, addPokemon}) => {
  const [search, setSearch, pokeInfo, setPokeInfo, isLoading] = useAxios();
  const [activeModal, toggle,error, mss] = useModal();

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const addPokemonToPokedex = () => {

    const yaExiste = pokedex.some( pokemon => pokemon.name === pokeInfo.name);
    if(yaExiste){
      toggle(false, 'Este pokemon ya existe');
    }else{
      addPokemon(pokeInfo);
      toggle();
    }
    setSearch('');
    setPokeInfo(null);
  }

  return (
    <div className="add-pokemon">
      <Modal active={activeModal} toggle={toggle} mss={mss}/>
      <Link className="icono-return" to="/"><img src={iconReturn} alt="icono return" /></Link>
      <div className="container">
        <div className="search">
          <label>
            <span className="search-title">Busca pokemon por id o nombre</span>
            <input type="text" value={search} spellCheck="false" placeholder="¡Atrapalos Ya!" onChange={handleChange}/>
          </label>
        </div>
        <div className="cuerpo">
          
          <div className="poke">
            {search?
              <div className="info-poke">
                {isLoading ? <Loader/> :
                  (
                    pokeInfo?
                    <div className="details">
                      <img src={pokeInfo.img} alt={pokeInfo.name} />
                      <div className="name">{pokeInfo.name}</div>
                      <div className="stats">
                        <div className="box"> 
                          <span className="stat">{pokeInfo.weight} Kg</span>
                          <span className="name_stat">Peso</span> 
                        </div>
                        <span className="line"></span>
                        <div className="box">
                          <span className="stat">{pokeInfo.height} m</span>
                          <span className="name_stat">Altura</span>
                        </div>
                      </div>
                      <div className="types">
                      {pokeInfo.types.map((type, index) => (
                        <span key={index} className={type}>{type}</span>
                      ))}
                      </div>
                      <button 
                        onClick={addPokemonToPokedex} 
                        className="btn-add-pokemon"
                      >Agregar pokemon</button>
                    </div>
                    :<div className="no-existe-pokemon">
                        <div className="no-existe-title">No existe este pokemon</div>
                        <img src={unounNotFound} alt="pokemon not found" />
                    </div>
                  )
                }
              </div>
              :
              <div className="advice">
                <span className="advice-title">Intenta buscar un pokemon</span>
                <img src={rotom} alt="rotom" />
              </div>
            }
          </div>
          
        </div>
      </div>
    </div>
   );
}

const mapStateToProps = state => ({
  pokedex: state.pokedex
});

const mapDispatchToProps = dispatch => ({
  addPokemon: (pokemon) => dispatch(addNewPokemon(pokemon))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon);