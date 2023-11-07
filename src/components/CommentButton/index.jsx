import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import { getCommentsByParams } from '../../services/commentsService'
import { Drawer } from 'antd'
import comment from '../../assets/icons/commets.svg'
import './styles.sass'
import { getUserByParams } from '../../services/userService'

const CommentButton = ({ details }) => {
  CommentButton.propTypes = {
    details: PropTypes.object
  }

  const [comments, setComments] = useState([])
  const [userSendComment, setUserSendComment] = useState([])
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const getCommentsList = useCallback(() => {
    getCommentsByParams({ postOwnerUsername: details?.username, postId: details?.postId })
      .then(response => setComments(response))
  }, [])

  const getUserSendComment = useCallback(() => {
    getUserByParams({ userId: comments.userId}) // revisar logica para que filtrar por un solo usuario
      .then(response => setUserSendComment(response))
  }, [])

  useEffect(() => {
    getCommentsList()
  }, [getCommentsList])

  useEffect(() => {
    getUserSendComment()
  }, [getUserSendComment])

  return (<>
    <img 
      className='comment-icon' 
      src={comment} 
      alt='icon' 
      onClick={showDrawer}
    />
    <Drawer title='Comments' placement='bottom' onClose={onClose} open={open}>
      {
        comments.map((comment, index) => (
          <div key={index} className='comment-card'>
            <img src={userSendComment[0].urlImage} alt="" />
            <p>{comment.content}</p>
          </div>
        ))
      }
    </Drawer>
  </>)
}

export default CommentButton
