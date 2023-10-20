import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
  return (
    <section>
      <Outlet />
      <Navbar />
    </section>
  )
}

export default Layout
