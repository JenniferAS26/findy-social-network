import { Routes, Route } from "react-router-dom"
import Feed from "../pages/Feed"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Profile from "../pages/Profile"
import PostDetail from "../pages/PostDetail"
import Layout from "../components/Layout"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path='profile' element={<Profile />} />
        <Route path='post-detail' element={<PostDetail />} />
      </Route>
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes
