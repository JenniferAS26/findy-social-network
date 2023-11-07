import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { getUserByParams } from '../../services/userService'
import LikeButton from '../LikeButton'
import CommentButton from '../CommentButton'
import save from '../../assets/icons/save.svg'
import share from '../../assets/icons/share.svg'
import './styles.sass'

const PostCard = ({ details }) => {
  PostCard.propTypes = {
    details: PropTypes.object
  }
  const [userLogged, setUserLogged] = useState([])
  const [userFollow, setUserFollow] = useState([])
  const [fileType, setFileType] = useState('')

  const { username } = useParams()
  const navigate = useNavigate()

  const goToUserProfile = () => {
    if (details?.username === username) {
      navigate(`/profile/${details?.username}`)
    } else {
      navigate(`/user-profile/${details?.username}`)
    }

  }
  const goToPost = () => navigate(`/post-detail/${details?.postId}`)

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

  const getUserLogged = useCallback(() => {
    getUserByParams({ username })
      .then(response => setUserLogged(response[0]))
  }, [])

  const getUserFollow = useCallback(() => {
    getUserByParams({ username: details?.username })
      .then(response => setUserFollow(response[0]))
  }, [])
  
  useEffect(() => {
    getUserLogged()
  }, [getUserLogged])

  useEffect(() => {
    getUserFollow()
  }, [getUserFollow])

  useEffect(() => {
    setFileType(getFileTypeFromURL(details?.urlContent))
  }, [])

  return (<>
    <article
      className='post-card'
    >
      <div className='post-card__contact-info'>
        <img src={
          userLogged === userFollow 
            ? userLogged?.urlImage 
            : userFollow?.urlImage
        } 
        alt='contact photo' />
        <span onClick={() => goToUserProfile()}>
          {details?.username}
        </span>
      </div>
      <div className='post-card__media-container' onClick={() => goToPost()}>
        {
          fileType === 'photo'
            ? <img className='post-card__media-container--image' src={details?.urlContent} alt='post content' />
            : <video className='post-card__media-container--image' src={details?.urlContent} controls></video>
        }
      </div>
      <div className='post-card__icons'>
        <div className='post-card__icons--reaction'>
          <div className='icon'>
            <LikeButton />
            {/* <span>300K</span> */}
          </div>
          <div className='icon'>
            <CommentButton details={details} />
            {/* <span>300K</span> */}
          </div>
          <div className='icon'>
            <img src={share} alt='icon' />
            {/* <span>300K</span> */}
          </div>
        </div>
        <img className='save' src={save} alt='label icon' />
      </div>
      <div className='post-card__description'>
        <p className='post-card__description--text'><span className='username' onClick={() => goToUserProfile()}>{details?.username}</span> {details?.description}</p>
      </div>
    </article>
  </>)
}

export default PostCard
