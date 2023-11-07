import { useCallback, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { getUserByParams } from '../../services/userService'
import logoName from '../../assets/icons/logo-name.svg'
import like from '../../assets/icons/like.svg'
import messages from '../../assets/icons/messages.svg'
import './styles.sass'

const Header = () => {
  const { user } = useContext( AuthContext )
  const [userInfo, setUserInfo] = useState([])

  const getUserData = useCallback(() => {
    getUserByParams({ email: user.email })
      .then(response => setUserInfo(response[0]))
  }, [])
  useEffect(() => {
    getUserData()
  } , [getUserData])

  return (
    <header className='header'>
      <img src={logoName} alt='logo icon and name' />
      <section className='interactions'>
        <Link to={`/users-list/${userInfo?.username}`}>
          <img src={like} alt="heart icon" />
        </Link>
        <Link to='/active'>
          <img src={messages} alt="messages icon" />
        </Link>
      </section>
    </header>
  )
}

export default Header
