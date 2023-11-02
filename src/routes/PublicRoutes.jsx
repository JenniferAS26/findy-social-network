import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = ({ isAuth, redirectPath, children }) => {

  if (isAuth) return <Navigate to={redirectPath} />

  return (
    <>
      { children ? children : <Outlet /> }
    </>
  )
}

export default PublicRoutes
