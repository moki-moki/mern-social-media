import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { AuthContext } from "../components/context/AuthContext";
import DeletePostModal from "../components/DeletePostModal";
import {
  PostCardContainer,
  PostCardContentContainer,
  PostCardDesc,
  PostCardUserContainer,
  PostCardWrapper,
  PostCardUserInfo,
  PostCardUserImg,
  PostCardButtonDelete,
  PostCardBtnContainer,
  PostCardBottomBar,
} from "../components/styles/PostCardStyles";
import { fetchPostData } from "../components/utils/apiHelpers";
import Loader from "../components/Loader";
import Comments from "../components/Comments";
import { SinglePostCommentBtn, SinglePostPostedBy, SinglePostUsername } from "../components/styles/SinglePostStyles";
import CommentInput from "../components/CommentInput";
import LikeDislike from "../components/LikeDislike";

const SinglePost = ({ socket }) => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [postData, setPostData] = useState({});
  const [userPost, setUserPost] = useState({});
  const [like, setLike] = useState();
  const [dislike, setDislike] = useState();
  const history = useHistory();
  // delete
  const [openModal, setOpenModal] = useState(false);
  // comment input
  const [showInput, setShowInput] = useState(false);

  // show input
  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  // get posts data
  useEffect(() => {
    const getData = async () => {
      const req = await fetch(`/api/posts/${id}`);
      const data = await req.json();
      setPostData(data);
      setLike(data.likes);
      setDislike(data.dislikes);
    };
    getData();
  }, []);

  // get users data for a post
  useEffect(() => {
    // const fetchPostData = async () => {
    //   const req = await fetch(`/api/user?userId=${postData.userId}`);
    //   const data = await req.json();
    fetchPostData(postData.userId).then((data) => setUserPost(data));
    // setUserPost(data);
    // };

    if (!user) {
      history.push("/login");
    }

    fetchPostData();
  }, [postData, id, user]);

  // deletes a post duuh...
  const deletePost = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {
        (!like,
        !dislike ? (
          <Loader />
        ) : (
          <PostCardContainer>
            <PostCardContentContainer>
              <PostCardUserContainer>
                <PostCardDesc>{postData.desc}</PostCardDesc>
                {postData["img"] ? <img style={{ margin: "1em 0", width: "100%" }} src={`https://mokimoki-mern-social-media.herokuapp.com/images/${postData.img}`} alt="alt" /> : null}
                <PostCardWrapper>
                  <PostCardUserInfo to={`/profile/${userPost.username}/${userPost._id}`}>
                    <SinglePostPostedBy> Posted by: </SinglePostPostedBy>
                    <PostCardUserImg
                      src={`
https://avatars.dicebear.com/api/identicon/${userPost.username}.svg
        `}
                    />
                    <SinglePostUsername>{userPost.username}</SinglePostUsername>
                  </PostCardUserInfo>
                </PostCardWrapper>
              </PostCardUserContainer>
            </PostCardContentContainer>
            {/* LIKE DISLIKE */}
            <PostCardBottomBar>
              <PostCardBtnContainer>
                {/* like dislike component */}
                <LikeDislike socket={socket} id={id} likeArr={like} dislikeArr={dislike} />
                {/* comments */}
                <SinglePostCommentBtn disabled={showInput === true} onClick={() => handleShowInput()}>
                  &#128172;
                </SinglePostCommentBtn>
              </PostCardBtnContainer>
              {user.user._id === postData.userId ? <PostCardButtonDelete onClick={() => deletePost(id)}>&#10060;</PostCardButtonDelete> : null}
            </PostCardBottomBar>
            {/* Comment input */}
            {showInput ? <CommentInput userId={user.user._id} postId={id} setShowInput={setShowInput} showInput={showInput} /> : null}

            {/* DELETE */}
            {openModal ? <DeletePostModal setOpenModal={setOpenModal} openModal={openModal} id={postData._id} /> : null}
          </PostCardContainer>
        ))
      }
      {/* displaying comment */}
      {postData.comments === undefined ? null : <Comments comments={postData.comments} />}
    </>
  );
};

export default SinglePost;
