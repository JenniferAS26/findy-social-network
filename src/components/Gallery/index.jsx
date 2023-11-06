import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types';
import { getFollowingByParams } from '../../services/followingService'
import './styles.scss';

const Gallery = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const {followerId} = useParams()
  console.log(followerId);

  
  /* Gallery.propTypes = {
    children: PropTypes.array,  
  }; */
 
  const renderItem = (item) => {
    switch(item.type) {
      case 'photo':
        return <img src={item.url} alt={`Photo ${item.id}`} />;
      case 'video':
        return (
          <video controls>
            <source src={item.url} type="video/mp4" />
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


  useEffect(() => {
    getFollowingByParams({followerId})
      .then(response => {
        console.log(response);
        setFilteredItems(response)
      })
  
  }, [filter]);
 
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
         {/*  {filteredItems.map((item, index) => (
            <div key={index} className="gallery-item">
              {renderItem(item)}
            </div>
          ))} */}
          {
            filteredItems[0]?.posts.map((post, index) => (
              <img key={index} className='cardImage' src={post.urlContent} alt="" />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;