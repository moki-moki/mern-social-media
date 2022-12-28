import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  PostCardBottomBar,
  PostCardBtnContainer,
  PostCardButtonDelete,
  PostCardContainer,
  PostCardContentContainer,
  PostCardDesc,
  PostCardHeader,
  PostCardLink,
  PostCardUserContainer,
  PostCardUserImg,
  PostCardUserInfo,
  PostCardWrapper,
} from "./styles/PostCardStyles";
import { SinglePostCommentBtn } from "./styles/SinglePostStyles";
import { Link } from "react-router-dom";
import DeletePostModal from "./DeletePostModal";
import moment from "moment";
import { fetchPostData } from "./utils/apiHelpers";
import LikeDislike from "./LikeDislike";

const Post = ({ post, socket }) => {
  const [userPost, setUserPost] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const { user } = useContext(AuthContext);

  // fetching post data
  useEffect(() => {
    fetchPostData(post.userId).then((data) => setUserPost(data));
  }, [post.userId]);

  // deleting post
  const deletePost = async () => {
    setOpenModal(!openModal);
  };

  return (
    <PostCardContainer>
      <PostCardContentContainer>
        <PostCardUserContainer>
          <PostCardWrapper>
            <PostCardUserInfo
              to={`/profile/${userPost.username}/${userPost._id}`}
            >
              <PostCardUserImg
                src={`
https://avatars.dicebear.com/api/identicon/${userPost.username}.svg
        `}
              />

              <PostCardHeader>{userPost.username}</PostCardHeader>
            </PostCardUserInfo>
            <div>
              <p>
                Posted At:
                <PostCardHeader>
                  {moment(post.createdAt).format("DD MMM  HH:mm")}
                </PostCardHeader>
              </p>
            </div>
          </PostCardWrapper>
          <div style={{ width: "100%" }}>
            <PostCardDesc>
              <PostCardLink to={`/posts/${post._id}`}>{post.desc}</PostCardLink>
            </PostCardDesc>
          </div>
          <img
            src={`https://mokimoki-mern-social-media.herokuapp.com/images/${post.img}`}
            style={{ width: "100%" }}
            alt=""
          />
          <PostCardBottomBar>
            <PostCardBtnContainer>
              <LikeDislike
                socket={socket}
                id={post._id}
                likeArr={post.likes}
                dislikeArr={post.dislikes}
                postUserId={post.userId}
                userPost={userPost.username}
              />
              {/* comments */}
              <SinglePostCommentBtn>
                <Link to={`/posts/${post._id}`}>
                  &#128172;
                  {post.comments.length > 0 ? post.comments.length : null}
                </Link>
              </SinglePostCommentBtn>
            </PostCardBtnContainer>
            {user.user._id === post.userId ? (
              <PostCardButtonDelete onClick={() => deletePost(post._id)}>
                &#10060;
              </PostCardButtonDelete>
            ) : null}
            {/* modal for delete */}
            {openModal ? (
              <DeletePostModal
                setOpenModal={setOpenModal}
                openModal={openModal}
                id={post._id}
              />
            ) : null}
          </PostCardBottomBar>
        </PostCardUserContainer>
      </PostCardContentContainer>
    </PostCardContainer>
  );
};

export default Post;
