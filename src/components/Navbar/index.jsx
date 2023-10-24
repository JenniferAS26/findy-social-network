import { Link } from 'react-router-dom'
import homeIcon from '../../assets/icons/home.svg'
import search from '../../assets/icons/glass.svg'
import bell from '../../assets/icons/bell.svg'
import profile from '../../assets/images/profile-picture.svg'

import './styles.sass'

const Navbar = () => {
  return (
    <nav className='footer'>
      <ul className='footer__list'>
        <div className='left'>
          <Link className='footer__list--options' to='/'>
            <img src={homeIcon} alt='house icon' />
          </Link>
          <Link className='footer__list--options' to='/'>
            <img src={search} alt='house icon' />
          </Link>
        </div>
        <div className='right'>
          <Link className='footer__list--options' to='/'>
            <img src={bell} alt='house icon' />
          </Link>
          <Link className='footer__list--options' to='/profile'>
            <img src={profile} alt='house icon' />
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
