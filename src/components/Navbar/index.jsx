import { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { getUserByParams } from '../../services/userService'
import homeIcon from '../../assets/icons/home.svg'
import search from '../../assets/icons/glass.svg'
import bell from '../../assets/icons/bell.svg'

import './styles.sass'

const Navbar = () => {
  const { user } = useContext( AuthContext )
  const [ userLog, setUserLog ] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const { username } = useParams()

  const navigate = useNavigate()

  const goTo = () => {
    navigate(`/make-post/${username}`)
  }

  const getUserDataFromContext = useCallback(() => {
    getUserByParams({ email: user.email })
      .then(response => setUserInfo(response[0]))
  }, [])

  const getUserLogged = useCallback(() => {
    getUserByParams({ username })
      .then(response => setUserLog(response[0]))
  }, [])

  useEffect(() => {
    getUserDataFromContext()
  }, [getUserDataFromContext])

  useEffect(() => {
    getUserLogged()
  }, [getUserLogged])

  return (<>
    <nav className='footer'>
      <button 
        className='make-a-post'
        onClick={goTo}
      >
        +
      </button>
      <ul className='footer__list'>
        <div className='left'>
          <Link className='footer__list--options' to={`/${userInfo?.username}`}>
            <img src={homeIcon} alt='house icon' />
          </Link>
          <Link className='footer__list--options' to='/search'>
            <img src={search} alt='house icon' />
          </Link>
        </div>
        <div className='right'>
          <Link className='footer__list--options' to={`/${userInfo?.username}`}>
            <img src={bell} alt='house icon' />
          </Link>
          <Link className='footer__list--options' to={`/profile/${userInfo?.username}`}>
            <img className='profile-picture' src={userLog?.urlImage} alt='house icon' />
          </Link>
        </div>
      </ul>
    </nav>
  </>)
}

export default Navbar
