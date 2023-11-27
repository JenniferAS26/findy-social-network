import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({ isAuth, redirectPath = '/', children }) => {
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
