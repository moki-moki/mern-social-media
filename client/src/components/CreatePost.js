import { useContext, useRef, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import NotificationFail from "./NotificationFail";
import NotificationSuccess from "./NotificationSuccess";
import {
  FormBtnSubmit,
  FormInput,
  FormInputUpload,
  FormPlus,
  FormPlustBorder,
  ShareContainer,
  ShareForm,
} from "./styles/CreatePostStyles";
import { createPost, uploadPost } from "./utils/apiHelpers";

const CreatePost = () => {
  const [fileName, setFileName] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationError, setShowNotificationError] = useState(false);
  const desc = useRef();
  const { user } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user.user._id,
      desc: desc.current.value,
    };

    if (fileName) {
      const data = new FormData();
      const fileNameStored = Date.now() + fileName.name;
      data.append("name", fileNameStored);
      data.append("file", fileName);
      console.log(fileNameStored);
      newPost.img = fileNameStored;

      try {
        // uploads posts content
        await uploadPost(data);
      } catch (error) {
        setShowNotificationError(true);
        console.log(error);
      }
    }

    // uploads the post
    try {
      if (desc.current.value !== "" || newPost.img !== null) {
        createPost(newPost.desc, newPost.img, newPost.userId);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      } else {
        console.log(newPost);
        return;
      }
    } catch (error) {
      setShowNotificationError(true);
      console.log(error);
    }
  };

  return (
    <ShareContainer>
      <ShareForm onSubmit={submitHandler}>
        <FormInput
          placeholder={"Whats on your mind " + user.user.username + "?"}
          ref={desc}
        />
        <span style={{ marginTop: "1em " }}>Share Photo or a Video</span>
        <label htmlFor="file" style={{ marginTop: "1em" }}>
          <div style={{ textAlign: "center" }}>
            <FormPlustBorder>
              <FormPlus>&#43;</FormPlus>
            </FormPlustBorder>
          </div>
          <FormInputUpload
            type="file"
            id="file"
            accept=".png,.jpeg,.jpg"
            onChange={(e) => setFileName(e.target.files[0])}
          />
        </label>
        {fileName && (
          <img
            style={{ margin: "1em 0", maxWidth: "100%", maxHeight: "1000px" }}
            src={URL.createObjectURL(fileName)}
            alt="img"
          />
        )}
        <FormBtnSubmit style={{ marginTop: "1em" }} type="submit">
          Share
        </FormBtnSubmit>
        {/* success msg */}
        {showNotification ? <NotificationSuccess /> : null}
        {/* error msg */}
        {showNotificationError ? <NotificationFail /> : null}
      </ShareForm>
    </ShareContainer>
  );
};

export default CreatePost;
