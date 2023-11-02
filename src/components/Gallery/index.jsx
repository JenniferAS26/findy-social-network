import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { formToJSON } from 'axios'

const Gallery = ({children}, {items}) => {
  const [ filteredItems, setFilteredItems ] = useState([]);
  const [filter, setFilter] = useState('post') //o poner cada item como photos, videos.. etc
    Gallery.propTypes = {
        children: PropTypes.array
      }
      useEffect(() => {
        switch (filter) {
            case 'photos':
                setFilteredItems(items.filter(item => item.type === 'photo'));
                break;
            case 'videos':
                setFilteredItems(items.filter(item => item.type === 'video'));
                break;
            case 'tags':
                setFilteredItems(items.filter(item => item.type === 'tag'));
                break;
            default:
                setFilteredItems(items);
        }
    }, [filter, items]);
  return (
    <section>
        <div className="Contianer-Gallery">
          <div className="Contianer-Gallery_header">
            <button onClick={() => setFilter('photos')}>Photos</button>
            <button onClick={() => setFilter('videos')}>Videos</button>
            <button onClick={() => setFilter('album')}>Album</button>
            <button onClick={() => setFilter('tags')}>Tags</button>
          </div>
          <div className="Contianer-Gallery_card">
          {filteredItems.map((item, index) => (
                        <div key={index}>{/* Renderizar item aquí */}</div>
                  ))}
            {children}
          </div>
        </div>
    </section>
  )
}

export default Gallery
