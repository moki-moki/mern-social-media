import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import { BtnArrowUp } from "../components/styles/BackToTopBtnStyles";
import Loader from "../components/Loader";
import { getPosts } from "../components/utils/apiHelpers";
import { AuthContext } from "../components/context/AuthContext";
import { MainHomeContainer } from "../components/styles/HomepageStyles";

const HomepageLayout = ({ socket }) => {
  const [posts, setPosts] = useState();

  const { user } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    getPosts().then((data) =>
      setPosts(
        data?.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      )
    );

    if (!user) {
      history.push("/login");
    }
  }, [user]);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MainHomeContainer>
      {posts === undefined ? (
        <Loader />
      ) : (
        <>
          {posts.map((post) => (
            <Post socket={socket} key={post._id} post={post} />
          ))}
        </>
      )}
      <BtnArrowUp onClick={handleToTop}>&#9650;</BtnArrowUp>
    </MainHomeContainer>
  );
};

export default HomepageLayout;
