import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { getUserByParams } from '../../services/userService'
import save from '../../assets/icons/save.svg'
import like from '../../assets/icons/like.svg'
import comment from '../../assets/icons/commets.svg'
import share from '../../assets/icons/share.svg'
import { FcLike } from 'react-icons/fc'
import './styles.sass'
import LikeButton from '../LikeButton'

const PostCard = ({ details }) => {
  PostCard.propTypes = {
    details: PropTypes.object
  }
  const [userLogged, setUserLogged] = useState([])
  const [userFollow, setUserFollow] = useState([])

  const { username } = useParams()
  const navigate = useNavigate()

  const goToUserProfile = () => {
    if (details?.username === username) {
      navigate(`/profile/${details?.username}`)
    } else {
      navigate(`/user-profile/${details?.userId}`)
    }

  }
  const goToPost = () => navigate(`/post-detail/${details?.postId}`)

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

  return (
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
        <img src={details?.urlContent} alt='post content' />
      </div>
      <div className='post-card__icons'>
        <div className='post-card__icons--reaction'>
          <div className='icon'>
            {/* <img src={like} alt='icon' /> */}
            <LikeButton />
            <span>300K</span>
          </div>
          <div className='icon'>
            <img src={comment} alt='icon' />
            <span>300K</span>
          </div>
          <div className='icon'>
            <img src={share} alt='icon' />
            <span>300K</span>
          </div>
        </div>
        <img className='save' src={save} alt='label icon' />
      </div>
      <div className='post-card__description'>
        <p className='post-card__description--text'><span className='username' onClick={() => goToUserProfile()}>{details?.username}</span> {details?.description}</p>
      </div>
    </article>
  )
}

export default PostCard
