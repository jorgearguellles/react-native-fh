import { useEffect, useReducer } from 'react'

// 2.1 step: Create a Interface to organize the initial State Type
interface AuthState {
  validate: boolean,
  token: string | null,
  userName: string,
  name: string, 
};

// 1 step: Initial state Schema
const initialState:AuthState = {
  validate: true,
  token: null,
  userName: '',
  name: '', 
};

// 2.2 step: create the type Action

type LoginPayload = {
  userName: string, 
  name: string,
}

type AuthAction = 
  | { type: 'logout' } 
  | { type: 'login', payload: LoginPayload};

// 2 step: Define reducer function

const authReducer = ( state:AuthState, action:AuthAction ):AuthState =>{

  switch ( action.type ) {
    case 'logout':
      return {
        validate: false,
        token: null,
        userName: '',
        name: '',
      }
    // case 'login':
    //   return {
    //     validate: false,
    //     token: 'ABC123',
    //     name: action.payload.name,
    //     userName: action.payload.userName,
    //   }
    case 'login':
      const { name, userName } = action.payload;
      return {
        validate: false,
        token: 'ABC123',
        name,
        userName,
      }
  
    default:
      return state;
  }
};


export const Login = () => {
  
  const [ { validate, token, name }, dispatch ] = useReducer( authReducer, initialState );

  useEffect( ()=> {
    setTimeout( ()=>{
      dispatch( { type: 'logout' } )
    }, 1500)
  }, [ ]);

  const login = () => {
    dispatch( {
      type: 'login',
      payload: {
        name: 'Jorge Arias',
        userName: 'JA90',
      }
    })
  }

  const logout = () => {
    dispatch( {
      type: 'logout'
    })
  }

  if( validate ){
    return (
      <>
        <h2>Login</h2>
        <div className='alert alert-info'>
          Validating...
        </div>
      </>
    )
  }

  return (
    <>
      <h2>Login</h2>

      {
        ( token )
          ? <div className='alert alert-success'>Authenticate como: { name }</div>
          : <div className='alert alert-danger'>No Authenticate </div>
      }

      {
        ( token )
          ? ( 
            <button 
              className='btn btn-danger'
              onClick={ logout }
            >
              Logout
            </button>
          )
          : (
            <button 
              className='btn btn-primary'
              onClick={ login }
            >
              Login
            </button>
          )
      }
    </>
  )
}
