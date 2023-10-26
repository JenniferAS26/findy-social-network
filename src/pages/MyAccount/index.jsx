import profilePicture from '../../assets/images/profile-status.svg'
import status1 from '../../assets/images/photo-1.jpg'
import status2 from '../../assets/images/photo-2.jpg'
import status3 from '../../assets/images/photo-3.jpg'
import status4 from '../../assets/images/photo-4.jpg'
import status5 from '../../assets/images/photo-5.jpg'

import './styles.sass'
import MyGallery from '../../components/MyGallery'

const MyAccount = () => {
  return (
    <main className='my-account'>
      <h3 className='my-account__username'>user_name</h3>
      <div className='my-account__picture-stats'>
        <img className='my-account__picture-stats--image' src={profilePicture} alt='profile picture' />
        <div className='my-account__picture-stats--numbers'>
          <h4 className='number-label'>1K</h4>
          <span className='category'>Posts</span>
        </div>
        <div className='my-account__picture-stats--numbers'>
          <h4 className='number-label'>200K</h4>
          <span className='category'>Followers</span>
        </div>
        <div className='my-account__picture-stats--numbers'>
          <h4 className='number-label'>5K</h4>
          <span className='category'>Following</span>
        </div>
      </div>
      <span className='my-account__name'>Name</span>
      <div className='my-account__buttons-container'>
        <button className='my-account__buttons-container--button edit'>Edit profile</button>
        <button className='my-account__buttons-container--button share'>Share profile</button>
      </div>
      <div className='my-account__stories'>
        <div className='my-account__stories--story'>
          <img src={status1} alt='' />
        </div>
        <div className='my-account__stories--story'>
          <img src={status2} alt='' />
        </div>
        <div className='my-account__stories--story'>
          <img src={status3} alt='' />
        </div>
        <div className='my-account__stories--story'>
          <img src={status4} alt='' />
        </div>
        <div className='my-account__stories--story'>
          <img src={status5} alt='' />
        </div>
      </div>
      <MyGallery />
    </main>
  )
}

export default MyAccount
