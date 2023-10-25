import { Link } from 'react-router-dom'
import back from '../../assets/icons/back-white.svg'
import menu from '../../assets/icons/menu-white.svg'
import postPicture from '../../assets/images/post-picture.svg'
import profilePicture from '../../assets/images/profile-picture.svg'
import sendComment from '../../assets/icons/send-message.svg'

import './styles.sass'
import FloatingCard from '../../components/FloatingCard'

const PostDetail = () => {
  return (
    <main className='post-detail'>
      <section className='post-detail__cover-picture'>
        <div className='post-detail__cover-picture--top'>
          <Link to='/'>
            <img src={back} alt='back arrow icon' />
          </Link>
          <img src={menu} alt='menu icon' />
        </div>
        <img className='post-detail__cover-picture--image' src={postPicture} alt='cover picture from feed' />
      </section>
      <section className='post-detail__description'>
        <p className='post-detail__description--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates et reprehenderit consequuntur hic, fugit incidunt nemo facilis in. Quas, aliquid perferendis? Deserunt obcaecati, repellendus amet consectetur dignissimos at maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, libero. Reiciendis.</p>
      </section>
      <FloatingCard />
      <form className='post-detail__new-comment'>
        <img className='post-detail__new-comment--image' src={profilePicture} alt='profile picture' />
        <div className='post-detail__new-comment--input-wrapper'>
          <input className='input-message' type="text" placeholder='Write comment as username....' />
          <button className='send-comment' type='submit'>
            <img src={sendComment} alt='paper plane' />
          </button>
        </div>
      </form>
    </main>
  )
}

export default PostDetail
