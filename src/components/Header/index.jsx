import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import logoName from '../../assets/icons/logo-name.svg'
import like from '../../assets/icons/like.svg'
import messages from '../../assets/icons/messages.svg'
import './styles.sass'

const Header = () => {
  const { user } = useContext( AuthContext )

  return (
    <header className='header'>
      <img src={logoName} alt='logo icon and name' />
      <section className='interactions'>
        <Link to={`/users-list/${user.username}`}><img src={like} alt="heart icon" /></Link>
        <img src={messages} alt="messages icon" />
      </section>
    </header>
  )
}

export default Header
