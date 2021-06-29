import { Link } from 'react-router-dom';
import '../assets/css/notFound.scss';

import pokebola from '../assets/img/loader.png';

const NotFound = () => {
  return ( 
    <div className="not-found">
      <div className="main">
        <div className="number-section">
          <span>4</span>
          <img src={pokebola} alt="pokebol" />
          <span>4</span>
        </div>
        <p className="page-not-found">Page Not Found</p>
        <p className="leyenda">¡Te ves perido en tu viaje!</p>
        <Link to="/" className="regresar">
          Regresar a la pokedex
        </Link>
      </div>
    </div>
   );
}
 
export default NotFound;