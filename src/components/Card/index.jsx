import ImagePhoto1 from "../../assets/images/325591-Jennie-BLACKPINK-Photoshoot-4K-iphone-wallpaper 1.png";
import ImagePhoto2 from "../../assets/images/1100278 1.png";
import ImagePhoto3 from "../../assets/images/Jennie-Wallpaper 1.png";
import ImagePhoto4 from "../../assets/images/blackpink-jennie-calvin-klein-photoshoot-uhdpaper.com-hd-6 1.png";
import ImagePhoto5 from "../../assets/images/1100278 1.svg";
import ImagePhoto6 from "../../assets/images/Jennie-Wallpaper 1.png";
import './styles.scss'

const Card = () => {
  return (
    <div className="Card-container">
      <div className="gallery-container-1 ">
        <img  src={ImagePhoto1} alt="imagen" />
        <img  src={ImagePhoto2} alt="imagen" />
        <img  src={ImagePhoto3} alt="imagen" />
        <img  src={ImagePhoto4} alt="imagen" />
        <img  src={ImagePhoto5} alt="imagen" />
        <img  src={ImagePhoto5} alt="imagen" />
      </div>
    </div>
  );
};

export default Card; 

