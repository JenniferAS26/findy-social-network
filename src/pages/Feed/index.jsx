import { useCallback, useEffect, useState } from 'react'
import { getPost } from '../../services/postsService'
import Header from '../../components/Header'
import Status from '../../components/Status'
import Posts from '../../components/Posts'
import PostCard from '../../components/PostCard'
import './styles.sass'

const Feed = () => {
  const [posts, setPosts] = useState([])

  const getAllPosts = useCallback(() => {
    getPost()
      .then(response => setPosts(response))
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <main className='feed'>
      <Header />
      <Status />
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
