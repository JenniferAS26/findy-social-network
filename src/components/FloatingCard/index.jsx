import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import share from '../../assets/icons/share.svg'
import LikeButton from '../LikeButton'
import CommentButton from '../CommentButton'
import './styles.sass'

const FloatingCard = ({ postDetails, image }) => {
  FloatingCard.propTypes = {
    postDetails: PropTypes.array
  }

  return (
    <div className='floating-card'>
      <div className='floating-card__photo-name'>
        <img className='floating-card__photo-name--image' src={image} alt='profile picture' />
        <Link 
          className='floating-card__photo-name--name'
          to='/user-profile'
        >
          {postDetails[0]?.username}
        </Link>
      </div>
      <div className='floating-card__reactions'>
        <div className='floating-card__reactions--reaction'>
          <LikeButton />
          <span>108K</span>
        </div>
        <div className='floating-card__reactions--reaction'>
          <CommentButton details={postDetails[0]} />
          <span>54K</span>
        </div>
        <div className='floating-card__reactions--reaction'>
          <img src={share} alt='' />
          <span>2K</span>
        </div>
      </div>
    </div>
  )
}

export default FloatingCard
