import { useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getFollowing } from '../../services/followingService'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './styles.sass'

const ListOfContacts = () => {
  const [contacts, setContacts] = useState([])
  const { username } = useParams()

  const getContacts = useCallback(() => {
    getFollowing()
    .then(response => {
      console.log(response)
      setContacts(response)
    })
  }, [])

  useEffect(() => {
    getContacts()
  }, [getContacts])
  return (
    <main className='list-contacts'>
      <div className='top'>
        <Link className='list-contacts__arrow' to={`/${username}`}>
            <AiOutlineArrowLeft />
        </Link>
        <h2 className='list-contacts__title'>Discover people</h2>
      </div>
      <section className='list-contacts__gallery'>
        {
          contacts.map(( contact, index ) => (
            <div className='list-contacts__gallery--card' key={index}>
              <Link to={`/user-profile/${contact.followerId}`}><img className='image' src={contact.userPhoto} alt='' /></Link>
              <h4 className='title'>{contact.name}</h4>
              <button className='follow-button'>Follow</button>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default ListOfContacts
