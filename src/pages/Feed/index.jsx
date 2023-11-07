import { useCallback, useEffect, useState } from 'react'
import { getPost } from '../../services/postsService'
import Header from '../../components/Header'
import Status from '../../components/Status'
import Posts from '../../components/Posts'
import PostCard from '../../components/PostCard'
import './styles.sass'
import { useParams } from 'react-router-dom'
import { getUserByParams } from '../../services/userService'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [ user, setUser ] = useState([])
  const { username } = useParams()

  const getAllPosts = useCallback(() => {
    getPost()
      .then(response => setPosts(response))
  }, [])

  const getUserLogged = useCallback(() => {
    getUserByParams({ username })
      .then(response => setUser(response))
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  useEffect(() => {
    getUserLogged()
  }, [getUserLogged])

  return (
    <main className='feed'>
      <Header />
      <Status image={user[0]} />
      <Posts>
        {
          posts.map((post, index) => (
            <PostCard key={index} details={post} />
          ))
        }
      </Posts>
    </main>
  )
}

export default Feed
