import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import back from '../../assets/icons/back-white.svg'
import menu from '../../assets/icons/menu-white.svg'
import profilePicture from '../../assets/images/profile-picture.svg'
import sendComment from '../../assets/icons/send-message.svg'
import FloatingCard from '../../components/FloatingCard'
import { getPostByParams } from '../../services/postsService'
import './styles.sass'
import { addComment } from '../../services/commentsService'


const PostDetail = () => {
  const [postDetails, setPostDetails] = useState([])
  const { id } = useParams()

  const { register, handleSubmit } = useForm()

  const onSubmit = async ( comment ) => {
    const newComment = {
      ...comment,
      postId: id
    }
    await addComment(newComment)
  }

  const getOnePost = useCallback(() => {
    getPostByParams({ postId: id })
      .then(response => setPostDetails(response))
  }, [])
  
  useEffect(() => {
    getOnePost()
  }, [getOnePost])

  return (
    <main className='post-detail'>
      <section className='post-detail__cover-picture'>
        <div className='post-detail__cover-picture--top'>
          <Link to='/'>
            <img src={back} alt='back arrow icon' />
          </Link>
          <img src={menu} alt='menu icon' />
        </div>
        <img className='post-detail__cover-picture--image' src={postDetails[0]?.urlContent} alt='cover picture from feed' />
      </section>
      <section className='post-detail__description'>
        <p className='post-detail__description--text'>{postDetails[0]?.description}</p>
      </section>
      <FloatingCard postDetails={postDetails} />
      <form 
        className='post-detail__new-comment'
        onSubmit={handleSubmit(onSubmit)}
      >
        <img className='post-detail__new-comment--image' src={profilePicture} alt='profile picture' />
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
