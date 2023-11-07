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
import camara from '../../assets/icons/camara.png'

const Active = () => {
  return ( 
    <div className="active-container">
      <div className='search'>
        <img src={lupita} alt="" />
        <input type="text" name="Buscar" id="Buscar" placeholder='Bucar'/>   
      </div> 

      <div className='filas'>
        <div className='fila1'>
          <img src={img1} alt="" />
          <p>Mariana</p>
        </div>
        <div className='fila2'>
          <img src={img2} alt="" />
          <p>Isabel</p>
        </div>
        <div className='fila3'>
          <img src={img3} alt="" />
          <p>Camila</p>
        </div>
        <div className='fila4'>
          <img src={img4} alt="" />
          <p>Emilia</p>
        </div>
        <div className='fila5'>
          <img src={img5} alt="" />
          <p>Ana</p>
        </div>
        <div className='fila6'>
          <img src={img6} alt="" />
          <p>Paola</p>
        </div>
        <div className='fila7'>
          <img src={img7} alt="" />
          <p>Blue</p>
        </div>
      </div>

      <div className='columnas'>
        <div className='columna1'>
          <img src={img13} alt="" />
          <div className='information'>  
            <p>Amanda Serna Leon</p>
            <span> 10 new messages - 5h</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna2'>
          <img src={img12} alt="" />
          <div className='information'>  
            <p>Sofia Olarte</p>
            <span> 4 new messages - 18h</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna3'>
          <img src={img11} alt="" />
          <div className='information'>  
            <p>Daniela</p>
            <span> 14 + new messages 22h</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna4'>
          <img src={img10} alt="" />
          <div className='information'>  
            <p>Catalina A- Rodriguez</p>
            <span> Seen 14h ago</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna5'>
          <img src={img9} alt="" />
          <div className='information'>  
            <p>Yesse Acevedo</p>
            <span>Sent yesterday</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna6'>
          <img src={img8} alt="" />
          <div className='information'>  
            <p>Sofia Olarte</p>
            <span> Seen yesterday</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna7'>
          <img src={img7} alt="" />
          <div className='information'>  
            <p>Jeenifer Alarcon</p>
            <span> 4 new messages 18h</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna8'>
          <img src={img6} alt="" />
          <div className='information'>  
            <p>Kelly Saldaña</p>
            <span> 10+ new 22h</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna9'>
          <img src={img5} alt="" />
          <div className='information'>  
            <p>Milena Diaz</p>
            <span> seen 9h ago</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna10'>
          <img src={img4} alt="" />
          <div className='information'>  
            <p>Camila Carmona</p>
            <span> 4 new messages 7h</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
        <div className='columna11'>
          <img src={img3} alt="" />
          <div className='information'>  
            <p>Linda Montoya</p>
            <span> 7 new messages 3h</span>
         </div>
         <div className='icono'>
           <img className='camara' src= {camara} alt="" />  
         </div>
        </div>
       








      </div>
 

  











    </div>
   )
}

export default Active