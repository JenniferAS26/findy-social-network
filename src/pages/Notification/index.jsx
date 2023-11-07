import './styles.scss'
import arraw from '../../assets/icons/icons-left-arrow.png'
import woman1 from '../../assets/images/woman1.jpg'
import woman7 from '../../assets/images/woman7.webp'
import goal from '../../assets/icons/icons8-goal-50.png'
import woman8 from '../../assets/images/woman8.png'
import womann from '../../assets/images/woman12.jpg'
import woman13 from '../../assets/images/woman13.jpg'
import woman4 from '../../assets/images/woman4.jpg'
import woman2 from '../../assets/images/woman2.webp'
import woman6 from '../../assets/images/woman6.webp'
import img5 from '../../assets/images/woman5.webp'
import woman11 from '../../assets/images/woman11.webp'
import gato from '../../assets/images/gatotravieso.jpg'
import gato2 from '../../assets/images/gatodormido.jpg'
import perro from '../../assets/images/perrito.avif'
import woman3 from '../../assets/images/woman3.jpg'
import panda from '../../assets/images/panda.jpg'

const notification = () => {
  return (
    <div className='notification-container'>
      <div className='notification-container__notificaciones'>
        <img src={arraw} alt="" />
        Notificaciones
      </div>
      <div className='notification-container__notification1'>  
        <img src={woman1} alt="" />
        <div>
          <div className='solicitud'>Solicitud de seguidores</div>
          <div className='aprobacion'>Aprueba o ignora las solicitudes</div>
        </div>
      </div>
      <div className='notification-container__notification2'>
        <h3 className='nueva'>Nueva</h3>
        <div className='notification-cards'>
          <div className='card1'>
            <img className='womanblue' src={woman7} alt="" />
            <div className='informe'>Sarahtyau, Visckel y 102 personas más <span> te invitaron a unirte a sus canales de difusion.</span></div>
          </div>
          <div className='card2'>
            <img className='goal' src={goal} alt="" />
            <div className='estasaldia'>
              <span>Estás al día.</span> 
              <div className='blue'>
                Ver nueva actividad de thecrazydogkevin.
              </div>
            </div>
          </div>
          <div className= 'card3'>
            <img src={woman8} alt="" />
            <div className='legustolahistoria'>A <span className='camilo'>arbelaezcamilo y lu_2113</span> les gustó tu historia</div>
          </div>
        </div>
      </div>
      <div className='notification-container__notification4'>
        <h3 className='ultimos7dias'>Últimos 7 días</h3>
        <div className='card4'>
          <img src={womann} alt="" />
          <div className='mestizxss'><span>mestizxss</span> solicitó seguirte</div>
          <div className='button'>
            <button className='confirmar'>Confir...</button>  
            <button className='eliminar'>Elimin...</button>
         </div>
        </div>
      </div>
      <div className='notification-container__notification4'>
        <div className='card4'>
          <img src={woman13} alt="" />
          <div className='mestizxss'><span>mar1998</span> solicitó seguirte</div>
          <div className='button'>
            <button className='confirmar'>Confir...</button>  
            <button className='eliminar'>Elimin...</button>
         </div> 
        </div>
      </div>
      <div className='notification-container__notification5'>
        <div className='card5'>
          <img src={woman2} alt="" />
          <p>A <span>arbelaezjuanita</span> y <span>lulu_1128</span> les gustó tu histora</p>
          <img className='gatito' src={gato} alt="" />
        </div>
      </div>
      <div className='notification-container__notification6'>
        <div className='card6'>
          <img src={woman6} alt="" />
          <p>A <span>mar_contreras</span> y <span>sosa25789</span> les gustó tu histora</p>
        </div>
      </div>
      <div className='notification-container__notification7'>
        <h4>Últimos 30 días</h4>
        <div className='card7'>
          <img src={woman4} alt="" />
          <div className='informe2'>A <span> KellySaldaña y Cristia1729</span> les gustó tu historia</div>
          <img className='gatot' src={gato2} alt="" />
        </div>
      </div>
      <div className='notification-container__notification8'>
        <div className='card8'>
          <img src={woman11} alt="" />
          <div className='informe2'>A <span>GustavoGonzalez y Silvia_19</span> les gustó tu historia</div>
          <img className='gatot' src={perro} alt="" />
        </div>
      </div>
      <div className='notification-container__notification9'>
        <div className='card9'>
          <img src={woman3} alt="" />
          <div className='informe2'>A <span>MonicaRincon y Carlos-Rivas63</span> les gustó tu historia</div>
          <img className='panda' src={panda} alt="" />
        </div>
      </div>
    </div>

  )
}
export default notification