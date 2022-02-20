import { useState } from "react"

export const Counter = () => {

  const [counter, setCounter ] = useState(0);

  const addSubtract = ( num:number ) => {
    setCounter( counter + num );
  };


  return (
    <>
      <div>Counter: {counter}</div>
      <button 
        className="btn btn-primary"
        onClick={ ()=>addSubtract(1) }
      >
        +1
      </button>
      <button 
        className="btn btn-primary"
        onClick={ ()=>addSubtract(-1) }

      >
        -1
      </button>
    </>
  )
};

