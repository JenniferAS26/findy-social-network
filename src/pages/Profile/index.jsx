import { Link } from "react-router-dom";
import { useState } from 'react'
import Card from "../../components/Card";
import ImageBlackPink from "../../assets/images/blackpink-jennie-calvin-klein-photoshoot-uhdpaper.com-hd-6 1.png";
import ImageUhPaper from "../../assets/images/jennie-blackpink-uhdpaper.com-hd-4 1.png";
import ImageEllipse3 from "../../assets/icons/Ellipse 3.svg";
import ImageSlide from "../../assets/icons/back.svg";
import "./styles.scss";
import Gallery from "../../components/Gallery";

const Profile = () => {
  
  const [userData, setUserData] = useState({
    name: 'Jennie Kim',
    username: 'j.hello Guys',
    followid: ''
  });

  const hanleFollowClick = () => {
    console.log(`Nombre: ${userData.name}, Username: ${userData.username}`);
  }



  return (
    <section className="Profile-container-page">
      <div className="Profile-conatiner-page__inside">
        <header className="Profile-container-page__inside_header">
          <img className="black" src={ImageBlackPink} alt="imagen" />
          <Link className="slide" to="/">
            <img src={ImageSlide} alt="icono" />
          </Link>
        </header>
        <div className="Profile-contianer-page__inside__followers">
          <article className="followers">
            <h3>10.7 M</h3>
            <h5>Followers</h5>
          </article>
          <article className="image-center">
            <img className="image" src={ImageUhPaper} alt="imagen" />
            <img className="circle" src={ImageEllipse3} alt="icono" />
          </article>
          <article className="likes">
            <h3>108.3 M</h3>
            <h5>Likes</h5>
          </article>
        </div>
        <div className="Profile-contianer-page__inside__jennie-kim">
          <h4>Jennie Kim</h4>
          <h5>J.Hello Guys</h5>
          <h6>Follow me and like my post</h6>
        </div>
        <div className="Profile-contianer-page__inside__follow-massages">
          <button className="follow" onClick={hanleFollowClick}>Follow</button>
          <button className="messages">Messages</button>
        </div>
        <Gallery>
          <Card />
        </Gallery>
      </div>
    </section>
  );
};

export default Profile;
