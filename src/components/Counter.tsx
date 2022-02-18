import { useState } from "react"



export const Counter = () => {

  const [counter, setCounter ] = useState(0);

  const add = ( num:number ) => {
    setCounter( counter + num);
  }

  const subtract = ( num:number ) => {
    setCounter( counter - num);
  }


  return (
    <>
      <div>Counter: {counter}</div>
      <button 
        className="btn btn-primary"
        onClick={ ()=>add(1) }
      >
        +1
      </button>
      <button 
        className="btn btn-primary"
        onClick={ ()=>subtract(1) }

      >
        -1
      </button>
    </>
  )
}

