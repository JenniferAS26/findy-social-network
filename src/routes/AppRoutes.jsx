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
import ListOfContacts from '../pages/ListOfContacts'

const AppRoutes = () => {
  const { logged } = useContext( AuthContext )

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuth={logged}/>}>
        <Route element={<Layout />}>
          <Route path='/:username' element={<Feed />} />
          <Route path='post-detail/:id' element={<PostDetail />} />
          <Route path='search' element={<SearchContent />} />
          <Route path='profile/:username' element={<MyAccount />} />
        </Route>
        <Route path='make-post/:username' element={<MakePost />} />
        <Route path='user-profile/:followerId' element={<Profile />} />
        <Route path='edit-account/:username' element={<EditMyAccount />} />
        <Route path='users-list/:username' element={<ListOfContacts />} />
      </Route>
      <Route element={<PublicRoutes />} isAuth={ logged } >
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
