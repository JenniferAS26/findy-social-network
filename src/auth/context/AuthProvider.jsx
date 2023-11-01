import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types'

const initialState = {
  logged: false,
}

const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, initialState )

  const login = ( username = 'jenniferas', password = 'Jennifer@123' ) => {
    const user = { username, password }

    const action = {
      type: types.login,
      payload: user
    }

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login
    }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
