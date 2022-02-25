import { useState } from "react";
import {
  EditBtn,
  ProfileCardContainer,
  ProfileInfoContainer,
  ProfilePicture,
  ProfilePictureContainer,
  ProfilePictureWrapper,
} from "./styles/ProfileStyles/ProfileStyles";
import ProfileEditModal from "./ProfileEditModal";
import { CloseBtn } from "./styles/ProfileStyles/ProfileEditModalStyles";

const ProfileInfo = ({ name }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <ProfileCardContainer>
      {toggleEdit ? (
        <>
          <ProfileEditModal />
          <CloseBtn onClick={() => setToggleEdit(!toggleEdit)}>
            <h5>&#10060;</h5>
          </CloseBtn>
        </>
      ) : (
        <>
          <ProfilePictureContainer>
            <ProfilePictureWrapper>
              <ProfilePicture
                src={`
https://avatars.dicebear.com/api/identicon/${name}.svg
                `}
              />
            </ProfilePictureWrapper>
          </ProfilePictureContainer>
          <ProfileInfoContainer>
            <h3>
              Name: <span>{name}</span>
            </h3>
            <EditBtn onClick={() => setToggleEdit(!toggleEdit)}>
              <h5>Edit &#128295;</h5>
            </EditBtn>
          </ProfileInfoContainer>
        </>
      )}
    </ProfileCardContainer>
  );
};

export default ProfileInfo;
