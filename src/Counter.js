import React, { useState } from 'react';

function Counter(){
  const [number , setNumber] = useState(0);
  const up = () =>{
    setNumber(number + 1);
  }
  const down = () =>{
    setNumber(number - 1);
  }
  return (
    <>
      <div>
        <h1>{number}</h1>
        <button type="button" onClick={up}>+1</button>
        <button type="button" onClick={down}>-1</button>
      </div>
    </>
  );
}

export default Counter;
