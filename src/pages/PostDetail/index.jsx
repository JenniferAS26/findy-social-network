import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getPostByParams } from '../../services/postsService'
import { addComment } from '../../services/commentsService'
import { getUserByParams } from '../../services/userService'
import back from '../../assets/icons/back-white.svg'
import menu from '../../assets/icons/menu-white.svg'
import sendComment from '../../assets/icons/send-message.svg'
import FloatingCard from '../../components/FloatingCard'
import './styles.sass'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'


const PostDetail = () => {
  const [postDetails, setPostDetails] = useState([])
  const [userFollow, setUserFollow] = useState([])
  const [userLogged, setUserLogged] = useState([])
  const { postId } = useParams()

  const { user } = useContext( AuthContext )
  console.log(user)

  const { register, handleSubmit } = useForm()

  const onSubmit = async ( comment ) => {
    const newComment = {
      ...comment,
      postId
    }
    await addComment(newComment)
  }

  const getOnePost = useCallback(() => {
    getPostByParams({ postId })
      .then(response => {setPostDetails(response)})
  }, [])

  const getUserInfo = useCallback(() => {
    getUserByParams({ username: postDetails[0]?.username })
      .then(response => setUserFollow(response[0]))
  }, [userFollow]) // revisar esta logica
  
  const getUserLogged = useCallback(() => {
    getUserByParams({ username: user.username })
      .then(response => setUserLogged(response[0]))
  }, [])

  useEffect(() => {
    getOnePost()
  }, [getOnePost])

  useEffect(() => {
    getUserInfo()
  }, [getUserInfo])

  useEffect(() => {
    getUserLogged()
  }, [getUserLogged])

  return (
    <main className='post-detail'>
      <section className='post-detail__cover-picture'>
        <div className='post-detail__cover-picture--top'>
          <Link to={`/${user.username}`}>
            <img src={back} alt='back arrow icon' />
          </Link>
          <img src={menu} alt='menu icon' />
        </div>
        <img className='post-detail__cover-picture--image' src={postDetails[0]?.urlContent} alt='cover picture from feed' />
      </section>
      <section className='post-detail__description'>
        <p className='post-detail__description--text'>{postDetails[0]?.description}</p>
      </section>
      <FloatingCard postDetails={postDetails} image={userFollow?.urlImage} />
      <form 
        className='post-detail__new-comment'
        onSubmit={handleSubmit(onSubmit)}
      >
        <img className='post-detail__new-comment--image' src={userLogged?.urlImage} alt='profile picture' />
        <div className='post-detail__new-comment--input-wrapper'>
          <input 
            className='input-message' 
            type="text" 
            placeholder='Write comment as username....' 
            name='content'
            { ...register('content') }
          />
          <button className='send-comment' type='submit'>
            <img src={sendComment} alt='paper plane' />
          </button>
        </div>
      </form>
    </main>
  )
}

export default PostDetail
