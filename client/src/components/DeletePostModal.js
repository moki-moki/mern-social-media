import { Close, CloseContainer, DeleteModalContainer, DeleteModalMainContainer } from "./styles/DeleteModalStyles/DeleteModalStyles";
import { PostCardButtonDelete } from "./styles/PostCardStyles";
import { deletePostHelper } from "./utils/apiHelpers";
import { useHistory } from "react-router-dom";

const DeletePostModal = ({ id, setOpenModal, openModal }) => {
  const history = useHistory();
  const deletePost = async (id) => {
    await deletePostHelper(id);
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      history.push("/");
    }
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <DeleteModalMainContainer>
      <DeleteModalContainer>
        <Close onClick={() => closeModal()}>&#10060;</Close>
        <h1 style={{ padding: "0.5em" }}>Are you sure you want to delete this post?</h1>
        <PostCardButtonDelete onClick={() => deletePost(id)}>Delete &#128169;</PostCardButtonDelete>
      </DeleteModalContainer>
    </DeleteModalMainContainer>
  );
};

export default DeletePostModal;
