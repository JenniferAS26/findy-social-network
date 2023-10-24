import Header from '../../components/Header'
import Status from '../../components/Status'
import Posts from '../../components/Posts'
import './styles.sass'
import PostCard from '../../components/PostCard'

const Feed = () => {
  return (
    <main className='feed'>
      <Header />
      <Status />
      <Posts>
        <PostCard />
        <PostCard />
      </Posts>
    </main>
  )
}

export default Feed
