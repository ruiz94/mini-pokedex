import { useState } from "react";

const useModal = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const toggle = (val = false, mss = '') => {
    setError(false);
    setMensaje('');
    if(val) {
      setError(true);
    }
    if(mss.length > 0){
      setMensaje(mss);
    }
    setActiveModal(!activeModal)
  };

  return [activeModal, toggle, error, mensaje];
}
 
export default useModal;