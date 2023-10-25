import Card from "../../components/Card"
import ImageBlackPink from "../../assets/images/blackpink-jennie-calvin-klein-photoshoot-uhdpaper.com-hd-6 1.png";
import ImageUhPaper from '../../assets/images/jennie-blackpink-uhdpaper.com-hd-4 1.png'
import ImageEllipse3 from '../../assets/icons/Ellipse 3.svg'
import ImageSlide from '../../assets/icons/back.svg'
import './styles.scss'

const Profile = () => {
  return (
    <section className="Profile-container-page">
      <div className="Profile-conatiner-page__inside">
        <header className="Profile-container-page__inside_header">
          <img src={ImageBlackPink} alt="imagen" />
          <img src={ImageSlide} alt="icono" />
        </header>
        <div className="Profile-contianer-page__inside__followers">
          <article className="followers">
            <span>10.7 M</span>
            <h5>Followers</h5>
          </article>
          <article>
            <img src={ImageUhPaper} alt="imagen" />
            <img src={ImageEllipse3} alt="icono" />
          </article>
          <article className="likes">
            <span>108.3 M</span>
            <h5>Likes</h5>
          </article>
        </div>
        <div className="Profile-contianer-page__inside__jennie-kim">
          <h4>Jennie Kim</h4>
          <h5>J.Hello Guys</h5>
          <h6>Follow me and like my post</h6>
        </div>
        <div className="Profile-contianer-page__inside__follow-massages">
          <button>Follow</button>
          <button>Massages</button>
        </div>
        <div className="Profile-contianer-page__inside__Gsllery">
          <h5 className="Photos">Photos</h5>
          <h5 className="Videos">Videos</h5>
          <h5 className="album">Album</h5>
          <h5 className="tag">Tag</h5>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
