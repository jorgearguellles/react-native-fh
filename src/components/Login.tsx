import React, { useReducer } from 'react'

// 2.1 step: Create a Interface to organize the initial State Type
interface AuthState {
  validate: boolean,
  token: string | null,
  useName: string,
  name: string, 
};

// 1 step: Initial state Schema
const initialState:AuthState = {
  validate: true,
  token: null,
  useName: '',
  name: '', 
};

// 2.2 step: create the type Action

type AuthAction = { type: 'logout' };

// 2 step: Define reducer function

const authReducer = ( state:AuthState, action:AuthAction ):AuthState =>{

};


export const Login = () => {

  
  const [ state, dispatch ] = useReducer( authReducer, initialState );

  return (
    <>
      <h2>Login</h2>

      <div className='alert alert-info'>
        Validating...
      </div>
      <div className='alert alert-danger'>
        No Authenticate 
      </div>
      <div className='alert alert-success'>
      Authenticate
      </div>
      <button className='btn btn-primary'>Login</button>
      <button className='btn btn-danger'>Logout</button>
    </>
  )
}
