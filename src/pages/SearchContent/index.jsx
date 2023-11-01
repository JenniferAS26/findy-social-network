import './styles.scss'
import lupita from '../../assets/icons/search2.svg'
import img1 from '../../assets/images/woman1.jpg'
import img2 from '../../assets/images/woman2.webp'
import img3 from '../../assets/images/woman3.jpg'
import img4 from '../../assets/images/woman4.jpg'
import img5 from '../../assets/images/woman5.webp'
import img6 from '../../assets/images/woman6.webp'
import img7 from '../../assets/images/woman7.webp'
import img8 from '../../assets/images/woman8.png'
import img9 from '../../assets/images/woman9.jpg'
import img10 from '../../assets/images/woman10.jpg'
import img11 from '../../assets/images/woman11.webp'
import img12 from '../../assets/images/woman12.jpg'
import img13 from '../../assets/images/woman13.jpg'
const SearchContent = () => {
  return (
    <div className='searchcontent-container'>

      <div className='buscar'>
        <img src={lupita} alt="" />
        <input type="text" name="Buscar" id="Buscar" placeholder='Bucar'/>
        
        
      </div>
    
      <div className='searchcontent-container__gallery'>

        <div className='searchcontent-container__img1'>
          <img src={img1}alt="" />
        </div>

        <div className='searchcontent-container__img2'>
          <img src={img2}alt="" />
        </div>


        <div className='searchcontent-container__img3'>
          <img src={img3}alt="" />
        </div>

        <div className='searchcontent-container__img4'>
          <img src={img4}alt="" />
        </div> 
 
        <div className='searchcontent-container__img5'>
          <img src={img5}alt="" />
        </div>
  
        <div className='searchcontent-container__img6'>
          <img src={img6}alt="" />
        </div>

        
        <div className='searchcontent-container__img7'>
          <img src={img7}alt="" />
        </div>

        <div className='searchcontent-container__img8'>
          <img src={img8}alt="" />
        </div>

        <div className='searchcontent-container__img9'>
          <img src={img9}alt="" />
        </div>

        <div className='searchcontent-container__img10'>
          <img src={img10}alt="" />
        </div>

        <div className='searchcontent-container__img11'>
          <img src={img11}alt="" />
        </div>

        <div className='searchcontent-container__img12'>
          <img src={img12}alt="" />
        </div>

        <div className='searchcontent-container__img13'>
          <img src={img13}alt="" />
        </div>

   
 






      </div>

      


   











    </div>
  )
}

export default SearchContent
