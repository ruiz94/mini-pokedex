const Pokemon = ({name, height, weight, types, img}) => {
  return ( 
    <div className="pokemon">
      <div className="img">
        <img src={img} alt={`pokemon ${name}`} />
      </div>
      <div className="name">{name}</div>
      <div className="height">Altura: {height}</div>
      <div className="weight">Peso: {weight}</div>
      <div className="types">{
        types.map( (type, index) => <span key={index} className={type}>{type}</span>)
      }</div>
    </div>
   );
}
 
export default Pokemon;