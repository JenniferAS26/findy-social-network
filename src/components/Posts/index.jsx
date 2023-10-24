import PropTypes from 'prop-types'
import './styles.sass'


const Posts = ({ children }) => {
  Posts.propTypes = {
    children: PropTypes.array
  }

  return (
    <section className='posts-container'>
      { children }
    </section>
  )
}

export default Posts


