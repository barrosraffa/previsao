import React from 'react';

 const Imagem = (props) => {
    return (
   <img className="previsao__img" src={props.imagem} alt="imagem da temperatura"/>
  )
}

  export default Imagem;