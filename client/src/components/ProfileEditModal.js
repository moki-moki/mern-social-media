import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ModalContainer,
  ModalInput,
} from "./styles/ProfileStyles/ProfileEditModalStyles";
import { editProfile } from "./utils/apiHelpers";

const ProfileEditModal = ({ id }) => {
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await editProfile(name, id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ModalContainer>
      <form onSubmit={submitHandler}>
        <ModalInput
          type="text"
          minLength="3"
          maxLength="13"
          placeholder="Change username..."
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </ModalContainer>
  );
};

export default ProfileEditModal;
