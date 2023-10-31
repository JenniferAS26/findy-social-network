import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import contactPhoto from '../../assets/images/image-1.svg'
import post from '../../assets/images/post-image.svg'
import save from '../../assets/icons/save.svg'
import like from '../../assets/icons/like.svg'
import comment from '../../assets/icons/commets.svg'
import share from '../../assets/icons/share.svg'
import './styles.sass'

const PostCard = ({ details }) => {
  PostCard.propTypes = {
    data: PropTypes.object
  }

  const navigate = useNavigate()

  const goToUserProfile = () => navigate('/user-profile')
  const goToPost = () => navigate('/post-detail')

  return (
    <article
      className='post-card'
    >
      <div className='post-card__contact-info'>
        <img src={contactPhoto} alt='contact photo' />
        <span onClick={() => goToUserProfile()}>
          username
        </span>
      </div>
      <div className='post-card__media-container' onClick={() => goToPost()}>
        <img src={details.postUrl} alt='post content' />
      </div>
      <div className='post-card__icons'>
        <div className='post-card__icons--reaction'>
          <div className='icon'>
            <img src={like} alt='icon' />
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
        <p className='post-card__description--text'><span className='username' onClick={() => goToUserProfile()}>username</span> {details.description}</p>
      </div>
    </article>
  )
}

export default PostCard
