import { Link } from 'react-router-dom'
import status1 from '../../assets/images/photo-1.jpg'
import status3 from '../../assets/images/photo-3.jpg'
import './styles.sass'

const MyGallery = () => {
  return (
    <section className='my-gallery'>
      <nav className='my-gallery__navbar'>
        <Link className='my-gallery__navbar--link'>Photos</Link>
        <Link className='my-gallery__navbar--link'>Videos</Link>
        <Link className='my-gallery__navbar--link'>Album</Link>
        <Link className='my-gallery__navbar--link'>Tag</Link>
      </nav>
      <div className='my-gallery__posts-container'>
        <div className='my-gallery__posts-container--post'>
          <img src={status1} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status3} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status1} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status3} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status1} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status3} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status1} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status3} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status1} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status3} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status1} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status3} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status1} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status3} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status1} alt='post image' />
        </div>
        <div className='my-gallery__posts-container--post'>
          <img src={status3} alt='post image' />
        </div>
      </div>
    </section>
  )
}

export default MyGallery
