import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { getUserByParams } from '../../services/userService'
import LikeButton from '../LikeButton'
import save from '../../assets/icons/save.svg'
import comment from '../../assets/icons/commets.svg'
import share from '../../assets/icons/share.svg'
import { Drawer } from 'antd'
import './styles.sass'
import { getCommentsByParams } from '../../services/commentsService'

const PostCard = ({ details }) => {
  PostCard.propTypes = {
    details: PropTypes.object
  }
  const [userLogged, setUserLogged] = useState([])
  const [userFollow, setUserFollow] = useState([])
  const [comments, setComments] = useState([])
  const [open, setOpen] = useState(false)

  const { username } = useParams()
  const navigate = useNavigate()

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const goToUserProfile = () => {
    if (details?.username === username) {
      navigate(`/profile/${details?.username}`)
    } else {
      navigate(`/user-profile/${details?.username}`)
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

  const getCommentsList = useCallback(() => {
    getCommentsByParams({ postOwnerUsername: details?.username })
      .then(response => setComments(response))
  }, [])
  
  useEffect(() => {
    getUserLogged()
  }, [getUserLogged])

  useEffect(() => {
    getUserFollow()
  }, [getUserFollow])

  useEffect(() => {
    getCommentsList()
  }, [getCommentsList])

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
            <img 
              className='comment-icon' 
              src={comment} 
              alt='icon' 
              onClick={showDrawer}
            />
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
    <Drawer title='Comments' placement='bottom' onClose={onClose} open={open}>
      {
        comments.map((comment, index) => (
          <p key={index}>{comment.content}</p>
        ))
      }
    </Drawer>
  </>)
}

export default PostCard
