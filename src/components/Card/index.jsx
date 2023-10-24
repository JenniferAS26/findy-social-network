import React from 'react'
import ImagePhoto1 from '../../assets/images/325591-Jennie-BLACKPINK-Photoshoot-4K-iphone-wallpaper 1.png'
import ImagePhoto2 from '../../assets/images/1100278 1.png'
import ImagePhoto3 from '../../assets/images/Jennie-Wallpaper 1.png'
import ImagePhoto4 from '../../assets/images/blackpink-jennie-calvin-klein-photoshoot-uhdpaper.com-hd-6 1.png'
import ImagePhoto5 from '../../assets/images/1100278 1.svg'
import ImagePhoto6 from '../../assets/images/Jennie-Wallpaper 1.png'

const Card = () => {
  return (
    <div className='Card-container  flex flex-wrap px-1 gird  gap-x-2 gap-y-2 grid-rows-2 hover:grid-rows-6'>
    <div className='gallery-container-1 w-7 h-6 px-1 pr-px rounded-lg ' >
        <img className="mt-2" src={ImagePhoto1} alt="imagen" />
        <img className="mt-2" src={ImagePhoto2} alt="imagen" />
        <img className="mt-2" src={ImagePhoto3} alt="imagen" />
        <img className="mt-2" src={ImagePhoto4} alt="imagen" />
        <img className="mt-2" src={ImagePhoto5} alt="imagen" />
        <img className="mt-2" src={ImagePhoto5} alt="imagen" />
    </div>
    <div className='gallery-container-2 w-1/2 px-1 pr-px rounded-lg ' >
        <img className="mt-2" src={ImagePhoto5} alt="imagen" />
        <img className="mt-2" src={ImagePhoto4} alt="imagen" />
        <img className="mt-2" src={ImagePhoto6} alt="imagen" />
        <img className="mt-2" src={ImagePhoto1} alt="imagen" />
        <img className="mt-2" src={ImagePhoto3} alt="imagen" />
        <img className="mt-2" src={ImagePhoto2} alt="imagen" />
    </div>
</div>

    
  )
}

export default Card
