import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import { BtnArrowUp } from "../components/styles/BackToTopBtnStyles";
import Loader from "../components/Loader";
import { AuthContext } from "../components/context/AuthContext";
import { MainHomeContainer } from "../components/styles/HomepageStyles";
import useFecth from "../hooks/useFetch";

const HomepageLayout = ({ socket }) => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const {data, loading, setData} = useFecth("/api/posts/");

  const sortData = () => {
    setData(data?.sort((p1, p2) => new Date(p2.createdAt) = new Date(p1.createdAt)))
  }

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [])

  sortData();

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MainHomeContainer>
      {loading || data === undefined  ? (
        <Loader />
      ) : (
        <>
          {data.map((post) => (
            <Post socket={socket} key={post._id} post={post} />
          ))}
        </>
      )}
      <BtnArrowUp onClick={handleToTop}>&#9650;</BtnArrowUp>
    </MainHomeContainer>
  );
};

export default HomepageLayout;
