import { useState } from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import './styles.sass'

const LikeButton = () => {
  const [like, setLike] = useState(false)

  const handleClick = () => {
    setLike(!like)
  }

  return (
    <button 
      className='like-button'
      onClick={handleClick}
    >
      {
        like 
        ? <span className='like-button__like'><BsSuitHeartFill /></span>
        : <span className='like-button__unlike'><BsSuitHeart /></span>
      }
    </button>
  )
}

export default LikeButton
