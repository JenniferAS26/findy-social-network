import { Link } from 'react-router-dom'
import profilePicture from '../../assets/images/status-1.svg'
import like from '../../assets/icons/heart.svg'
import comment from '../../assets/icons/commets.svg'
import share from '../../assets/icons/share.svg'
import './styles.sass'

const FloatingCard = () => {
  return (
    <div className='floating-card'>
      <div className='floating-card__photo-name'>
        <img className='floating-card__photo-name--image' src={profilePicture} alt='' />
        <Link 
          className='floating-card__photo-name--name'
          to='/user-profile'
        >
          Username
        </Link>
      </div>
      <div className='floating-card__reactions'>
        <div className='floating-card__reactions--reaction'>
          <img src={like} alt='' />
          <span>108K</span>
        </div>
        <div className='floating-card__reactions--reaction'>
          <img src={comment} alt='' />
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
