import contactPicture1 from '../../assets/images/status-1.svg'
import contactPicture2 from '../../assets/images/status-2.svg'
import contactPicture3 from '../../assets/images/status-3.svg'
import contactPicture4 from '../../assets/images/status-4.svg'

import './styles.sass'

const Status = ({ image }) => {
  return (
    <section className='status'>
      <div className='status__profile-container'>
        <img src={image?.urlImage} alt='profile picture' />
      </div>
      <img src={contactPicture1} alt='contact photo' />
      <img src={contactPicture2} alt='contact photo' />
      <img src={contactPicture3} alt='contact photo' />
      <img src={contactPicture4} alt='contact photo' />
    </section>
  )
}

export default Status
