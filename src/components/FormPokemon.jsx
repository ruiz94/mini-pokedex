import { Link } from "react-router-dom";
const FormPokemon = ({search, setSearch, formData, handleSubmit, name, setName, types, handleInputTypes, weight, setWeight, height, setHeight}) => {


  return ( 
    <div className="container-form">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input 
            type="text" 
            value={name} 
            name="name"
            onChange={(e) => setName(e.target.value)} 
            autoComplete="off"
          />
          <span>Nombre</span>
        </label>
        <label className="label-types">
          <input 
            type="text" 
            value={types} 
            name="types"
            onChange={(e) => handleInputTypes(e.target.value)} 
            autoComplete="off"
          />
          <span>Tipo</span>
        </label>
        <label>
          <input 
            type="text" 
            value={weight} 
            name="weight"
            onChange={(e) => setWeight(e.target.value)} 
            autoComplete="off"
          />
          <span>Peso</span>
        </label>
        <label>
          <input 
            type="text" 
            value={height} 
            name="height"
            onChange={(e) => setHeight(e.target.value)} 
            autoComplete="off"
          />
          <span>Altura</span>
        </label>
        <label>
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <span>Id o nombre</span>
        </label>
        <div className="btns">
          <Link className="btn back" to="/">¡Ver tu pokedex!</Link>
          <button className="btn registro">Registrar</button>
        </div>
      </form>
    </div>
   );
}
 
export default FormPokemon;