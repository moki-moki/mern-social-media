import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "./context/AuthContext";
import { fetchPostData } from "./utils/apiHelpers";
import { PostCardBottomBar, PostCardBtnContainer, PostCardButtonDelete, PostCardContainer, PostCardContentContainer, PostCardHeader, PostCardUserContainer, PostCardUserImg, PostCardUserInfo, PostCardWrapper } from "./styles/PostCardStyles";
import { PostCardDesc } from "./styles/CommentStyles/CommentStyles";
import moment from "moment";
import DeleteCommentModal from "./DeleteCommentModel";

const Comment = ({ comment }) => {
  const [userData, setUserData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const { user: username } = useContext(AuthContext);
  const { id } = useParams();
  const { user, text, _id, date } = comment;

  useEffect(() => {
    fetchPostData(user).then((data) => setUserData(data));
  }, [user]);

  const deletePost = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <PostCardContainer>
        <PostCardContentContainer>
          <PostCardUserContainer>
            <PostCardWrapper>
              <PostCardUserInfo to={`/profile/${userData.username}/${userData._id}`}>
                <PostCardUserImg
                  src={`
https://avatars.dicebear.com/api/identicon/${userData.username}.svg
        `}
                />
                <PostCardHeader>{userData.username}</PostCardHeader>
              </PostCardUserInfo>
              <div>
                <p>
                  Posted At:
                  <PostCardHeader>{moment(date).format("DD MMM  HH:mm")}</PostCardHeader>
                </p>
              </div>
            </PostCardWrapper>
            <div style={{ width: "100%" }}>
              <PostCardDesc>{text}</PostCardDesc>
            </div>
            <PostCardBottomBar>
              <PostCardBtnContainer>
                {username.user._id === user ? <PostCardButtonDelete onClick={() => deletePost(_id)}>&#10060;</PostCardButtonDelete> : null}
                {/* modal for delete */}
                {openModal ? <DeleteCommentModal setOpenModal={setOpenModal} openModal={openModal} id={_id} postId={id} /> : null}
              </PostCardBtnContainer>
            </PostCardBottomBar>
          </PostCardUserContainer>
        </PostCardContentContainer>
      </PostCardContainer>
    </>
  );
};

export default Comment;
