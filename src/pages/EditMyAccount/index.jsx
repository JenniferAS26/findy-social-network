import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { getUserByParams, saveImage, updateUser } from '../../services/userService'
import Swal from 'sweetalert2'
import profilePicture from '../../assets/images/profile-status.svg'
import './styles.sass'

const EditMyAccount = () => {
  const [userLogged, setUserLogged] = useState([])
  const [ imagePreview, setImagePreview ] = useState(profilePicture)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const { username } = useParams()

  const handleImageChange = event => {
    const chosenImage = event.target.files[0]
    const imageReaderAPI = new FileReader()
    imageReaderAPI.onloadend = () => {
      setImagePreview(imageReaderAPI.result)
    }
    
    if (chosenImage) {
      imageReaderAPI.readAsDataURL(chosenImage)
    }
  }
  
  const onSubmit = async ( userInfo ) => {
    // event.preventDefault()
    const file = userInfo.profilePhoto[0]
    const imageUrl = await saveImage(file)
    const newUserInfo = {
      name: userInfo.name,
      username: userInfo.username,
      pronouns: userInfo.pronouns,
      bio: userInfo.bio,
      gender: userInfo.gender,
      urlImage: imageUrl
    }
    await updateUser(userLogged.id, newUserInfo)
    const userUpdate = await Swal.fire({
      title: 'Your new info was updated successfully',
      confirmButtonText: 'Ok',
      reverseButtons: true,
      "customClass": {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    if (userUpdate.isConfirmed) {
      navigate(-1)
    }
    console.log(newUserInfo)
  }

  // const goBack = () => navigate(`/profile/${username}`)
  const getUserLogged = useCallback(() => {
    getUserByParams({ username })
      .then(response => {
        setUserLogged(response[0])
        console.log(response[0])
      })
  }, [])

  useEffect(() => {
    getUserLogged()
  }, [getUserLogged])

  return (
    <main className='edit-account'>
      <div className='edit-account__top'>
        <Link className='edit-account__top--arrow' to={`/profile/${username}`}>
          <AiOutlineArrowLeft />
        </Link>
        <h3 className='edit-account__top--text'>Edit profile</h3>
      </div>
      <form 
        className='edit-account__form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='edit-account__form--picture-wrapper'>
          <div className='profile-picture'>
            <figure className='profile-picture__image-container'>
              <img className='current-picture' src={imagePreview} alt='profile photo' />
            </figure>
            <div className='profile-picture__input-container'>
              <input 
                type="file"
                id='input-url' 
                className='profile-picture__input-container--input-image'
                { ...register('profilePhoto') }
                name='profilePhoto'
                accept='image/*'
                onChange={handleImageChange}  
              />
              <label htmlFor="input-url">Edit picture</label>
            </div>
          </div>
        </div>
        <div className='edit-account__form--input-wrapper'>
          <div className='input-container'>
            <label htmlFor="">Name</label>
            <input 
              autoComplete='off'
              type="text"
              { ...register('name') } 
              name="name" 
              id="input-name" 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="input-username">Username</label>
            <input 
              autoComplete='off'
              type="text" 
              { ...register('username') }
              name="username" 
              id="input-username" 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="input-pronouns">Pronouns</label>
            <input 
              autoComplete='off'
              type="text" 
              { ...register('pronouns') }
              name="pronouns" 
              id="input-pronouns" 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="input-bio">Bio</label>
            <input 
              autoComplete='off'
              type="text" 
              { ...register('bio') }
              name="bio" 
              id="input-bio" 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="select-gender">Gender</label>
            <select 
              { ...register('gender') }
              name="gender" 
              id="select-gender"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="custom">Custom</option>
              <option value="not-say">Prefer not to say</option>
            </select>
          </div>
          <input className='submit-button' type="submit" value='Edit profile' />
        </div>
      </form>
    </main>
  )
}

export default EditMyAccount
