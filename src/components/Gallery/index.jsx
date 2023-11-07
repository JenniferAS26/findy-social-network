import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
/* import PropTypes from 'prop-types'; */
import { getFollowingByParams } from '../../services/followingService'
import './styles.scss';
import { getPostByParams } from '../../services/postsService';

const Gallery = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const {username} = useParams()
  console.log(username);
  const [postFromUsers, setPostFromUsers] = useState([])


  const renderItem = (item) => {
    switch(item.type) {
      case 'photo':
        return <img src={item.url} alt={`Photo ${item.id}`} />;
      case 'video':
        return (
          <video controls>
              {item.videos.map((video, index) => (
                <source key={index} src={video.url} type="video" />
            ))}
             Your browser does not support the video tag.
          </video>
        );
      case 'album':
        return (
          <div className="album">
            {item.photos.map((photo, index) => (
              <img key={index} src={photo.url} alt={`Album Photo ${index}`} />
            ))}
          </div>
        );
      case 'tags':
        return <div className="tags">{item.tags.join(', ')}</div>;
   /*  default:
    return <div>Unsupported item type</div>; */
    }
  };
  
 /*  const filterItems = (items, filter) => {
    let filtered;
    if (filter === 'all') {
      filtered = items;
    } else {
      filtered = items.flatMap(item =>
        item.posts.filter(post => post.type === filter)
      );
    }
    setFilteredItems(filtered);
  }; */

  const getPostsFromUsers = useCallback(() => {
    getPostByParams({ username })
      .then(response => setPostFromUsers(response))
  }, [])

  useEffect(() => {
    getPostsFromUsers()
  }, [getPostsFromUsers])

  useEffect(() => {
    getFollowingByParams({username})
      .then(response => {
        console.log(response);
        setFilteredItems(response)
      })
  
  }, [filter]);

 /*  useEffect(() => {
    filterItems(items, filter); // Filtra items cada vez que el filtro cambie.
  }, [filter, items]);
 */
  
 
  return (
    <section>
      <div className="Container-Gallery">
        <div className="Container-Gallery_header">
          <button className='Photos' onClick={() => setFilter('photos')}>Photos</button>
          <button className='Videos' onClick={() => setFilter('videos')}>Videos</button>
          <button className='album' onClick={() => setFilter('album')}>Album</button>
          <button className='tag' onClick={() => setFilter('tags')}>Tags</button>
        </div>
        <div className="Container-Gallery_cards">
          {/* {filteredItems.map((item, index) => (
          {/*  {filteredItems.map((item, index) => (
            <div key={index} className="gallery-item">
              {renderItem(item, filter === 'photos' ? 'photo' : 'video')}
            </div>
          ))} */}
          {
            postFromUsers.length
              ? postFromUsers.map((post, index) => (
                <img key={index} className='cardImage' src={post.urlContent} alt="" />
              ))
              : filteredItems[0]?.posts.map((post, index) => (
              <img key={index} className='cardImage' src={post.urlContent} alt="" />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;