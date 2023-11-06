import { Link, useParams } from 'react-router-dom'
import status1 from '../../assets/images/photo-1.jpg'
import status3 from '../../assets/images/photo-3.jpg'
import './styles.sass'
import { useCallback, useEffect, useState } from 'react'
import { getPostByParams } from '../../services/postsService'

const MyGallery = () => {
  const [posts, setPosts] = useState([])
  const { username } = useParams()
  console.log(username)

  const getPostByUser = useCallback(() => {
    getPostByParams({ username })
      .then(response => setPosts(response))
  }, [])

  useEffect(() => {
    getPostByUser()
  }, [getPostByUser])

  return (
    <section className='my-gallery'>
      <nav className='my-gallery__navbar'>
        <Link className='my-gallery__navbar--link'>Photos</Link>
        <Link className='my-gallery__navbar--link'>Videos</Link>
        <Link className='my-gallery__navbar--link'>Album</Link>
        <Link className='my-gallery__navbar--link'>Tag</Link>
      </nav>
      <div className='my-gallery__posts-container'>
        {
          posts.map((post, index) => (
            <div className='my-gallery__posts-container--post' key={index}>
              <img src={post?.urlContent} alt='post image' />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default MyGallery
