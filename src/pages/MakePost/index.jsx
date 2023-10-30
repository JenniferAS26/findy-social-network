import { useState } from 'react'
import { Link } from 'react-router-dom' 
import { AiOutlineClose } from 'react-icons/ai'
import postFile from '../../assets/images/post-0.jpeg'
import thumbnail1 from '../../assets/images/post-1.jpeg'
import thumbnail2 from '../../assets/images/post-2.jpeg'
import thumbnail3 from '../../assets/images/post-3.jpeg'
import thumbnail4 from '../../assets/images/post-4.jpeg'
import thumbnail5 from '../../assets/images/post-5.jpeg'
import thumbnail6 from '../../assets/images/post-6.jpeg'
import thumbnail7 from '../../assets/images/post-7.jpeg'
import thumbnail8 from '../../assets/images/post-8.jpeg'
import thumbnail9 from '../../assets/images/post-9.jpeg'
import thumbnail10 from '../../assets/images/post-10.jpeg'
import thumbnail11 from '../../assets/images/post-11.jpeg'
import { FaCamera } from 'react-icons/fa6'

import './styles.sass'

const MakePost = () => {
  const [ file, setFile ] = useState( null ) 

  return (
    <form className='make-post'>
      <div className='first-step'>
        <section className='make-post__top'>
          <div className='make-post__top--right'>
            <Link className='back' to='/'>
              <AiOutlineClose />
            </Link>
            <h3 className='title'>New post</h3>
          </div>
          <button className='make-post__top--left' type='button'>Next</button>
        </section>
        <section className='make-post__post-container'>
          <img className='make-post__post-container--post' src={postFile} alt='' />
        </section>
        <section className='make-post__recents'>
          <div className='make-post__recents--choose'>
            <input type='file' name='' id='' />
            <div>
              <FaCamera />
            </div>
          </div>
          <img className='make-post__recents--image' src={thumbnail1} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail2} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail3} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail4} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail5} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail6} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail7} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail8} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail9} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail10} alt='thumbnail' />
          <img className='make-post__recents--image' src={thumbnail11} alt='thumbnail' />
        </section>
      </div>
      {/* <div className='second-step'></div>
      <div className='third-step'></div> */}
    </form>
  )
}

export default MakePost
