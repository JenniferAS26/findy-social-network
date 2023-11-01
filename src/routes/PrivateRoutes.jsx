import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

const PrivateRoutes = ({ isAuth, redirectPath = '/sign-in', children }) => {
  // const { logged } = useContext( AuthContext )

  // return (logged)
  //   ? children
  //   : <Navigate to='/sign-in' />
  if (!isAuth) return <Navigate to={redirectPath} />
  return (
    <div>
      {
        children
          ? children
          : <Outlet />
      }
    </div>
  )
}

export default PrivateRoutes
