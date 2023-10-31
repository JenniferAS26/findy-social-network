import Header from '../../components/Header'
import Status from '../../components/Status'
import Posts from '../../components/Posts'
import './styles.sass'
import PostCard from '../../components/PostCard'
import { useCallback, useEffect, useState } from 'react'
import { getPost } from '../../services/postsService'

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
        {/* <PostCard />
        <PostCard /> */}
      </Posts>
    </main>
  )
}

export default Feed
