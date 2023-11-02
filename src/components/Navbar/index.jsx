import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import homeIcon from '../../assets/icons/home.svg'
import search from '../../assets/icons/glass.svg'
import bell from '../../assets/icons/bell.svg'
import profile from '../../assets/images/profile-picture.svg'

import './styles.sass'

const Navbar = () => {
  const { user } = useContext( AuthContext )

  const navigate = useNavigate()

  const goTo = () => {
    navigate(`/make-post/${user.username}`)
  }


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
          <Link className='footer__list--options' to={`/${user.username}`}>
            <img src={homeIcon} alt='house icon' />
          </Link>
          <Link className='footer__list--options' to='/search'>
            <img src={search} alt='house icon' />
          </Link>
        </div>
        <div className='right'>
          <Link className='footer__list--options' to='/'>
            <img src={bell} alt='house icon' />
          </Link>
          <Link className='footer__list--options' to={`/profile/${user.username}`}>
            <img src={profile} alt='house icon' />
          </Link>
        </div>
      </ul>
    </nav>
  </>)
}

export default Navbar
