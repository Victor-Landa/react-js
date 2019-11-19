import React from 'react';

  const HiJupyter = () => {
  const Info = '- Wikipedia';
  const isTrue = true;

  return(
    <div className="HiJupyter">
      <h1>Jupyter is the biggest planet in solar system. {Info}</h1>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />
      {isTrue ? <h4>Es verdadero</h4> : <h4>Es falso</h4>}
      {isTrue && <h6>Segundo bloque de condición, esto es verdadero.</h6>}
    </div>
  );
}

export default HiJupyter;