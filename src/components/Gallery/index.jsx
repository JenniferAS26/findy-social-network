import PropTypes from 'prop-types'

const Gallery = ({children}) => {
    Gallery.propTypes = {
        children: PropTypes.array
      }

  return (
    <section>
        <div className="Profile-contianer-page__inside__Gallery">
          <div className="Profile-contianer-page__inside__Gallery_header">
            <h5 className="Photos">Photos</h5>
            <h5 className="Videos">Videos</h5>
            <h5 className="album">Album</h5>
            <h5 className="tag">Tag</h5>
          </div>
          <div className="Profile-contianer-page__inside__Gsllery_card">
            {children}
          </div>
        </div>
    </section>
  )
}

export default Gallery
