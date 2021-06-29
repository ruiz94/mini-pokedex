import React from 'react';
import Portal from './Portal';
import '../assets/css/modal.scss';

const Modal = ({toggle, active, error, mss}) => {
  console.log(mss);
  return ( 
    <Portal>
      {active && 
        <div className="wrapper">
          <div className={`window ${error ? 'error' : ''}`}>
            <button className="btn-cerrar-tache" onClick={toggle}>x</button>
            
            {
              mss? 
              <React.Fragment>
                <h2 className="title">Upss</h2>
                <p>{mss}</p>
              </React.Fragment>
              :
              <React.Fragment>
                <h2 className="title">{error ? '!Error¡' : '!Atrapado¡'}</h2>
                <p className="text">
                  {error? 
                    'Debes llenar todos los campos'
                    : 'El pokemon ha sido guardado.'
                  }
                </p>
              </React.Fragment>

            }
            <button className="btn-cerrar"  onClick={toggle}>Ok</button>
          </div>
        </div>
      }
    </Portal>
   );
}
 
export default Modal;