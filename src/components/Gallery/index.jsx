import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getFollowingByParams } from "../../services/followingService";
import { getPostByParams } from "../../services/postsService";
import "./styles.scss";

const Gallery = () => {
  const [postFollowing, setPostFollowing] = useState([]);
  const [filter, setFilter] = useState("image");
  const { username } = useParams();
  console.log(username);
  const [postFromUsers, setPostFromUsers] = useState([]);

  const filteredPosts = postFollowing?.posts?.filter(post => post.type === filter)

  const getPostsFromUsers = useCallback(() => {
    getPostByParams({ username }).then((response) =>
      setPostFromUsers(response)
    );
  }, []);

  const getPostFromFollowing = useCallback(() => {
    getFollowingByParams({ username }).then((response) => setPostFollowing(response[0]));
  }, [])


  useEffect(() => {
    getPostsFromUsers();
  }, [getPostsFromUsers]);

  useEffect(() => {
    getPostFromFollowing()
  }, [getPostFromFollowing]);


  
  return (
    <section>
      <div className="Container-Gallery">
        <div className="Container-Gallery_header">
          <button 
            className="Photos" 
            onClick={() => {
              setFilter("image")
              console.log(filter)
            }}
          >
            Photos
          </button>
          <button className="Videos" onClick={() => setFilter("video")}>
            Videos
          </button>
          <button className="album" onClick={() => setFilter("album")}>
            Album
          </button>
          <button className="tag" onClick={() => setFilter("tags")}>
            Tags
          </button>
        </div>
        <div className="Container-Gallery_cards">
          {
            postFromUsers.length
              ? postFromUsers.map((post, index) => (
                  <img
                    key={index}
                    className="cardImage"
                    src={post.urlContent}
                    alt=""
                  />
                ))
              : filteredPosts?.map((post, index) => (
                  filter === 'image'
                    ? <img key={index} className="cardImage" src={post.urlContent} alt=""/>
                    : <video key={index} className="cardImage" src={post.urlContent} controls></video>
                ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
