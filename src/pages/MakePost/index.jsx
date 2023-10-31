import { useState } from 'react'
import { Link } from 'react-router-dom' 
import { useForm } from 'react-hook-form'
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
import profilePicture from '../../assets/images/profile-picture.svg'
import { FaCamera } from 'react-icons/fa6'
import { BsSearch } from 'react-icons/bs'

import './styles.sass'
import { saveImage } from '../../services/userService'

const MakePost = () => {
  const [ file, setFile ] = useState( postFile ) 

  const { register, handleSubmit } = useForm()

  const handleFileChange = ( event ) => {
    const chosenFile = event.target.files[0]
    const imageReaderAPI = new FileReader()
    imageReaderAPI.onloadend = () => {
      setFile(imageReaderAPI.result)
    }
    
    if (chosenFile) {
      imageReaderAPI.readAsDataURL(chosenFile)
    }
  }

  const nextStep = () => {
    const selectMedia = document.querySelector('.first-step')
    const writeCaptionContainer = document.querySelector('.second-step')

    selectMedia.style.display = 'none'
    writeCaptionContainer.style.display = 'grid'
  }

  const onSubmit = async ( postDetail ) => {
    const media = postDetail.postUrl[0]
    const fileUrl = await saveImage(media)
    const post = {
      ...postDetail,
      postUrl: fileUrl
    }
    console.log(post)
  }

  return (
    <form 
      className='make-post'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='first-step'>
        <section className='make-post__top'>
          <div className='make-post__top--right'>
            <Link className='back' to='/'>
              <AiOutlineClose />
            </Link>
            <h3 className='title'>New Post</h3>
          </div>
          <button 
            className='make-post__top--left' 
            type='button' 
            onClick={nextStep}
          >
            Next
          </button>
        </section>
        <section className='make-post__post-container'>
          <img className='make-post__post-container--post' src={file} alt='' />
        </section>
        <section className='make-post__recents'>
          <div className='make-post__recents--choose'>
            <input 
              className='input-file' 
              type='file'
              accept='image/*, video/*' 
              name='postUrl' 
              { ...register('postUrl') }
              onChange={handleFileChange}
            />
            <div className='icon'>
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
      <div className='second-step'>
        <section className='make-post__top'>
          <div className='make-post__top--right'>
            <Link className='back' to='/'>
              <AiOutlineClose />
            </Link>
            <h3 className='title'>New Post</h3>
          </div>
          <button className='make-post__top--left' type='submit'>Share</button>
        </section>
        <section className='caption-container'>
          <img className='caption-container__image' src={profilePicture} alt='' />
          <input 
            className='caption-container__input' 
            type='text' 
            placeholder='Write a caption...' 
            name='caption'
            { ...register('caption') }
          />
        </section>
        <section className='location'>
          <h3 className='location__title'>Add Location</h3>
          <div className='location__places'>
            <label htmlFor='location-bogota' className='location__places--label'>Bogota-Colombia</label>
            <input 
              type='radio' 
              name='location' 
              { ...register('location') }
              id='location-bogota' 
              value='bogota' 
              className='input-radio'
            />
            <label htmlFor='location-medellin' className='location__places--label'>Medellin, Antioquia </label>
            <input 
              type='radio' 
              name='location' 
              { ...register('location') }
              id='location-medellin'
              value='medellin' 
              className='input-radio'
            />
            <label htmlFor='location-other' className='location__places--label'>
              <BsSearch />
              Search
            </label>
            <input 
              type='radio' 
              name='location' 
              { ...register('location') }
              id='location-other' 
              value='other' 
              className='input-radio'
            />
          </div>
        </section>
        <section className='tag-people'>
        <h3 className='tag-people__title'>Tag</h3>
        </section>
      </div>
    </form>
  )
}

export default MakePost
