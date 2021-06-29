import loader from '../assets/img/loader.png';
import '../assets/css/loader.scss';

const Loader = () => {
  return ( 
    <div className="loader">
      <img src={loader} alt="pokebola loader" />
    </div>
  );
}
 
export default Loader;