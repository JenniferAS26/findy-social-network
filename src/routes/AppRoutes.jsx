import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Feed from '../pages/Feed'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
import PostDetail from '../pages/PostDetail'
import SearchContent from '../pages/SearchContent'
import MyAccount from '../pages/MyAccount'
import EditMyAccount from '../pages/EditMyAccount'
import MakePost from '../pages/MakePost'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const AppRoutes = () => {
  const { logged } = useContext( AuthContext )

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuth={logged}/>}>
        <Route element={<Layout />}>
          <Route path='/:username' element={<Feed />} />
          <Route path='post-detail/:id' element={<PostDetail />} />
          <Route path='search' element={<SearchContent />} />
          <Route path='profile' element={<MyAccount />} />
        </Route>
        <Route path='make-post' element={<MakePost />} />
        <Route path='user-profile/:id' element={<Profile />} />
        <Route path='edit-account' element={<EditMyAccount />} />
      </Route>
      <Route element={<PublicRoutes />} isAuth={ logged } >
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
