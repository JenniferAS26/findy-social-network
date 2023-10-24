import logoName from '../../assets/icons/logo-name.svg'
import like from '../../assets/icons/like.svg'
import messages from '../../assets/icons/messages.svg'
import './styles.sass'

const Header = () => {
  return (
    <header className='header'>
      <img src={logoName} alt='logo icon and name' />
      <section className='interactions'>
        <img src={like} alt="heart icon" />
        <img src={messages} alt="messages icon" />
      </section>
    </header>
  )
}

export default Header
