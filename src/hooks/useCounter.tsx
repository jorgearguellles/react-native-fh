
import { useState } from "react"

export const useCounter = ( initialNum:number = 5 ) => {
  
  const [counter, setCounter ] = useState( initialNum );

  const addSubtract = ( num:number ) => {
    setCounter( counter + num );
  };

  return {counter, addSubtract };
};
