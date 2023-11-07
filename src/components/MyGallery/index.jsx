import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostByParams } from '../../services/postsService'
import './styles.sass'

const MyGallery = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('photo')

  const { username } = useParams()

  const getFileTypeFromURL = ( url ) => {
    const extension = url.split('.').pop()

    const videoExtensions = ['mp4', 'avi', 'mkv', 'mov']
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif']

    if (videoExtensions.includes(extension)) {
      return 'video'
    } else if (imageExtensions.includes(extension)) {
      return 'photo'
    } else {
      return 'unknown'
    }
  }

  const filteredPosts = posts.filter(post => getFileTypeFromURL(post?.urlContent) === filter)

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
        <Link 
          className={`my-gallery__navbar--link ${filter === 'photo' ? 'active' : ''}`}
          onClick={() => setFilter('photo')}
        >
          Photos
        </Link>
        <Link 
          className={`my-gallery__navbar--link ${filter === 'video' ? 'active' : ''}`}
          onClick={() => setFilter('video')}
        >
          Videos
        </Link>
        <Link 
          className={`my-gallery__navbar--link ${filter === '' ? 'active' : ''}`}
          onClick={() => setFilter('')}
        >
          All
        </Link>
        <Link 
          className='my-gallery__navbar--link'
        >
          Tag
        </Link>
      </nav>
      <div className='my-gallery__posts-container'>
        {
          filteredPosts.map((post, index) => (
            <div 
              className='my-gallery__posts-container--post' 
              key={index}
            >
              <Link to={`/post-detail/${post?.postId}`}>
                {
                  filter === 'photo'
                    ? <img className='image' src={post?.urlContent} alt='post image' />
                    : <video className='image' src={post?.urlContent} controls></video>
                }
              </Link>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default MyGallery
