import './styles.scss'
import lupita from '../../assets/icons/search2.svg'
import img1 from '../../assets/images/1100278 1.svg'
import img2 from '../../assets/images/woman1.jpg'
const SearchContent = () => {
  return (
    <div className='searchcontent-container'>
      <div className='buscar'>
        <img src={lupita} alt="" />
        <input type="text" name="Buscar" id="Buscar" />
      </div>
    
      <div className='searchcontent-container__img2'>
        <img src={img2}alt="" />
      </div>

      
      <div className='searchcontent-container__img3'>
        <img src={img2}alt="" />
      </div>

      <div className='searchcontent-container__img4'>
        <img src={img2}alt="" />
      </div>

      <div className='searchcontent-container__img5'>
        <img src={img2}alt="" />
      </div>

      
      <div className='searchcontent-container__img6'>
        <img src={img2}alt="" />
      </div>


   











    </div>
  )
}

export default SearchContent
