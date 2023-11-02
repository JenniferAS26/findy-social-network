import { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import profilePicture from '../../assets/images/profile-status.svg'
import status1 from '../../assets/images/photo-1.jpg'
import status2 from '../../assets/images/photo-2.jpg'
import status3 from '../../assets/images/photo-3.jpg'
import status4 from '../../assets/images/photo-4.jpg'
import status5 from '../../assets/images/photo-5.jpg'
import MyGallery from '../../components/MyGallery'

import './styles.sass'
import { getUserByParams } from '../../services/userService'

const MyAccount = () => {
  const [userLogged, setUserLogged] = useState([])
  const { user } = useContext( AuthContext )
  const navigate = useNavigate()

  const editAccount = () => {
    navigate(`/edit-account/${user.username}`)
  }
  const getUserLogged = useCallback(() => {
    getUserByParams({ username: user.username })
      .then(response => {
        setUserLogged(response[0])
        console.log(response[0])
      })
  }, [])

  useEffect(() => {
    getUserLogged()
  }, [getUserLogged])


  return (
    <main className='my-account'>
      <h3 className='my-account__username'>{userLogged.username}</h3>
      <div className='my-account__picture-stats'>
        <img className='my-account__picture-stats--image' src={userLogged.urlImage} alt='profile picture' />
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
      <span className='my-account__name'>{userLogged.name}</span>
      <div className='my-account__buttons-container'>
        <button 
          className='my-account__buttons-container--button edit'
          onClick={editAccount}
        >
          Edit profile
        </button>
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
