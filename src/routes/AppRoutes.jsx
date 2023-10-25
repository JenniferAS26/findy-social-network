import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import Feed from "../pages/Feed"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Profile from "../pages/Profile"
import PostDetail from "../pages/PostDetail"
import SearchContent from "../pages/SearchContent"
import MyAccount from "../pages/MyAccount"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path='post-detail' element={<PostDetail />} />
        <Route path='search' element={<SearchContent />} />
        <Route path='profile' element={<MyAccount />} />
      </Route>
      <Route path='user-profile' element={<Profile />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes
