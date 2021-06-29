import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { connect } from "react-redux";

import FormPokemon from "../components/FormPokemon";
import InfoPokemon from "../components/InfoPokemon";

import { addNewPokemon } from "../actions";

import '../assets/css/createPokemon.scss';
import '../assets/css/typesColors.scss';

import iconoReturn from '../assets/img/return.png';
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";

const CreatePokemon = ({createPokemon}) => {
  const [search, setSearch, pokeInfo, setPokeInfo] = useAxios();
  const [formData, setFormData] = useState({});
  const [name, setName] = useState('');
  const [types, setTypes] = useState([]);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [activeModal, toggle, error] = useModal();

  const handleInputTypes = (e) => {
    // let value = e.target.value;

    const value = e.split(',');
    setTypes(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !types || !weight || !height || !pokeInfo.img){
      toggle(true);
      return;
    }

    const pokemon = {
      name,
      types,
      weight,
      height,
      img: pokeInfo.img
    }
    createPokemon(pokemon);

    setFormData({});
    setPokeInfo(null);
    setSearch('');
    setName('');
    setTypes([]);
    setWeight('');
    setHeight('');

    toggle();
  }

  useEffect(() => {
    setFormData({
      name,
      types,
      weight,
      height,
      img: pokeInfo ? pokeInfo.img : ''
    })
  }, [name, types, weight, height, pokeInfo])

  return ( 
    <div className="create-pokemon">
      <Modal active={activeModal} toggle={toggle} error={error}/>
      <Link className="return" to="/"><img src={iconoReturn} alt="icono return" /></Link>
      <div className="container">
        <InfoPokemon 
          pokeInfo={pokeInfo}
          formData={formData}
        />
        <FormPokemon 
          search={search} 
          setSearch={setSearch} 
          handleSubmit={handleSubmit}
          formData={formData}
          name={name}
          setName={setName}
          types={types}
          handleInputTypes={handleInputTypes}
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
        />
      </div>
    </div>
   );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createPokemon: (pokemon) => dispatch(addNewPokemon(pokemon))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(CreatePokemon);