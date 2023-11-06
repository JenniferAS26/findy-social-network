import { Link, useParams } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { addFollow, getFollowingByParams, removeFollow } from "../../services/followingService";
import { getUserByParams } from "../../services/userService";
import Gallery from "../../components/Gallery";
import ImageEllipse3 from "../../assets/icons/Ellipse 3.svg";
import ImageSlide from "../../assets/icons/back.svg";
import { AuthContext } from "../../auth/context/AuthContext";
import "./styles.scss";

const Profile = () => {
  const { user } = useContext( AuthContext )
  const { username } = useParams()
  console.log(username)
  const [profileContent, setProfileContent] = useState([])
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    id: uuid(),
    isFollowing: false,
  });
  const [userLogged, setUserLogged] = useState([])
  const [userFromUsers, setUserFromUsers] = useState([])

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
      const response = await removeFollow(userData.id);
      console.log("Datos eliminados con éxito:", response);
      
      setUserData({ ...userData, isFollowing: false });
    } catch (error) {
      console.error("Error al eliminar los datos:", error);
    }
  };

  const getUserLoggedData = useCallback(() => {
    getUserByParams({ email: user.email })
      .then(response => setUserLogged(response[0]))
  }, [])

  const getUserFromUsers = useCallback(() => {
    getUserByParams({ username: username })
      .then(response => {
        console.log('userFromUsers', response[0])
        setUserFromUsers(response[0])
      })
  }, [])
  
  const getFollowingInfo = useCallback(() => {
    getFollowingByParams({ username })
      .then(response => {
        // console.log('followingData', response)
        setProfileContent(response)
      })
  }, [])
  
  useEffect(() => {
    getUserLoggedData()
  }, [getUserLoggedData])
  
    useEffect(() => {
      getUserFromUsers()
    }, [getUserFromUsers])
  
  useEffect(() => {
    getFollowingInfo()
  }, [getFollowingInfo])

  return (
    <section className="Profile-container-page">
      <div className="Profile-conatiner-page__inside">
        <header className="Profile-container-page__inside_header">
          <img 
            className="black" 
            src={
                  userFromUsers
                    ? userFromUsers?.urlImage
                    : profileContent[0]?.coverPhoto
                } 
            alt="imagen" 
            style={{ objectFit: 'cover' }}
          />
          <Link className="slide" to={`/${userLogged?.username}`}>
            <img src={ImageSlide} alt="icono" />
          </Link>
        </header>
        <div className="Profile-contianer-page__inside__followers">
          <article className="followers">
            <h3>{profileContent[0]?.followers} M</h3>
            <h5>Followers</h5>
          </article>
          <article className="image-center">
            <img 
              className="image" 
              src={
                  userFromUsers
                  ? userFromUsers?.urlImage
                  : profileContent[0]?.userPhoto
                } 
              alt="imagen" 
            />
            <img className="circle" src={ImageEllipse3} alt="icono" />
          </article>
          <article className="likes">
            <h3>{profileContent[0]?.likes} M</h3>
            <h5>Likes</h5>
          </article>
        </div>
        <div className="Profile-contianer-page__inside__jennie-kim">
          <h4>
            {
              userFromUsers
              ? userFromUsers?.username
              : profileContent[0]?.name
            }
          </h4>
          <h5>J.Hello Guys</h5>
          <h6>
            {
              userFromUsers
              ? userFromUsers?.bio
              : profileContent[0]?.bio
            }
          </h6>
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
        <Gallery />
      </div>
    </section>
  );
};

export default Profile;
