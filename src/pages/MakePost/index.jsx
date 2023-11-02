import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom' 
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { FaCamera } from 'react-icons/fa6'
import { BsSearch } from 'react-icons/bs'
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
import { addPost } from '../../services/postsService'
import { saveImage } from '../../services/userService'
import { v4 as uuid } from 'uuid'

import './styles.sass'

const MakePost = () => {
  const { username } = useParams()
  console.log(username)
  const [ file, setFile ] = useState({
    name: postFile,
    type: 'image/jpeg'
  }) 

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const handleFileChange = ( event ) => {
    const chosenFile = event.target.files[0]
    setFile({
      name:URL.createObjectURL(chosenFile),
      type: chosenFile.type
    })

  }

  const nextStep = () => {
    const selectMedia = document.querySelector('.first-step')
    const writeCaptionContainer = document.querySelector('.second-step')

    selectMedia.style.display = 'none'
    writeCaptionContainer.style.display = 'grid'
  }

  const onSubmit = async ( postDetail ) => {
    const media = postDetail.urlContent[0]
    const fileUrl = await saveImage(media)
    const post = {
      ...postDetail,
      urlContent: fileUrl,
      username,
      postId: uuid()
    }
    // console.log(post)
    await addPost(post)
    navigate(`/${username}`)
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
          {
            file.type.split('/')[0] === 'image'
            ? <img className='make-post__post-container--post' src={file.name} alt='' />
            : <video className='make-post__post-container--post' src={file.name} autoPlay controls></video>
          }
        </section>
        <section className='make-post__recents'>
          <div className='make-post__recents--choose'>
            <input 
              className='input-file' 
              type='file'
              accept='image/*, video/*' 
              name='urlContent' 
              { ...register('urlContent') }
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
            name='description'
            { ...register('description') }
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
