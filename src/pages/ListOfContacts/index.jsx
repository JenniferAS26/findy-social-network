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
          contacts.map(( contact ) => (
            <div className='list-contacts__gallery--card' key={contact.followerId}>
              <img className='image' src={contact.userPhoto} alt='' />
              <h4 className='title'>{contact.name}</h4>
              <button className='follow-button'>Follow</button>
            </div>
          ))
        }
        {/* <div className='list-contacts__gallery--card'>
          <img className='image' src={contacts.userPhoto} alt='' />
          <h4 className='title'>{contacts.name}</h4>
          <button className='follow-button'>Follow</button>
        </div> */}
      </section>
    </main>
  )
}

export default ListOfContacts
