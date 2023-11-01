import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { addFollow, getFollowingByParams, removeFollow } from "../../services/followingService";
import Card from "../../components/Card";
import Gallery from "../../components/Gallery";
import ImageBlackPink from "../../assets/images/blackpink-jennie-calvin-klein-photoshoot-uhdpaper.com-hd-6 1.png";
import ImageUhPaper from "../../assets/images/jennie-blackpink-uhdpaper.com-hd-4 1.png";
import ImageEllipse3 from "../../assets/icons/Ellipse 3.svg";
import ImageSlide from "../../assets/icons/back.svg";
import "./styles.scss";

const Profile = () => {
  const { id } = useParams()
  console.log(id)
  const [profileContent, setProfileContent] = useState([])
  const [userData, setUserData] = useState({
    name: "Jennie Kim",
    username: "",
    followId: uuid(),
    isFollowing: false,
  });
  /* const handleFollowClick = async () => {
    try {
      const response = await axios.post('https://findy-app-service.onrender.com/users', userData);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
 }; */
  const handleFollowClick = async () => {
    try {
      if (!userData.isFollowing) {
        const updatedUserData = {
          ...userData,
        };

        const response = await addFollow(updatedUserData);
        console.log("Datos enviados con éxito:", response);

        setUserData({ ...updatedUserData, isFollowing: true });
      } else {
        handleUnfollowClick();
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const handleUnfollowClick = async () => {
    try {
      const response = await removeFollow(userData.followId);
      console.log("Datos eliminados con éxito:", response);
      
      setUserData({ ...userData, isFollowing: false });
    } catch (error) {
      console.error("Error al eliminar los datos:", error);
    }
  };

  const getFollowingInfo = useCallback(() => {
    getFollowingByParams({ followerId: id })
      .then(response => {
        console.log(response)
        setProfileContent(response)
      })
  }, [])

  useEffect(() => {
    getFollowingInfo()
  }, [getFollowingInfo])

  return (
    <section className="Profile-container-page">
      <div className="Profile-conatiner-page__inside">
        <header className="Profile-container-page__inside_header">
          <img className="black" src={profileContent[0]?.coverPhoto} alt="imagen" />
          <Link className="slide" to="/">
            <img src={ImageSlide} alt="icono" />
          </Link>
        </header>
        <div className="Profile-contianer-page__inside__followers">
          <article className="followers">
            <h3>{profileContent[0]?.followers} M</h3>
            <h5>Followers</h5>
          </article>
          <article className="image-center">
            <img style={{width: '76px', height: '76px', objectFit: 'cover'}} className="image" src={profileContent[0]?.userPhoto} alt="imagen" />
            <img className="circle" src={ImageEllipse3} alt="icono" />
          </article>
          <article className="likes">
            <h3>{profileContent[0]?.likes} M</h3>
            <h5>Likes</h5>
          </article>
        </div>
        <div className="Profile-contianer-page__inside__jennie-kim">
          <h4>{profileContent[0]?.name}</h4>
          <h5>J.Hello Guys</h5>
          <h6>{profileContent[0]?.bio}</h6>
        </div>
        <div className="Profile-contianer-page__inside__follow-massages">
          {userData.isFollowing ? (
            <button className="unfollow" onClick={handleUnfollowClick}>
              Unfollow
            </button>
          ) : (
            <button className="follow" onClick={handleFollowClick}>
              Follow
            </button>
          )}
          <button className="messages">Messages</button>
        </div>
        <Gallery>
          <Card />
          {
            profileContent.map((user, index) => (
              <Card key={index} />
            ))
          }
        </Gallery>
      </div>
    </section>
  );
};

export default Profile;
