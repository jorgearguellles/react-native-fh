import { useCounter } from "../hooks/useCounter";

export const CounterHook = ( ) => {
  const { counter, addSubtract } = useCounter();

  return (
    <>
      <div>Counter by Custom Hook: {counter}</div>
      <button 
        className="btn btn-primary"
        onClick={ ()=>addSubtract(1) }
      >
        +1
      </button>
      &nbsp;
      <button 
        className="btn btn-primary"
        onClick={ ()=>addSubtract(-1) }

      >
        -1
      </button>
    </>
  )
};

