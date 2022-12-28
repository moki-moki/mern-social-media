import { useContext, useState } from "react";
import {
  EditBtn,
  ProfileCardContainer,
  ProfileInfoContainer,
  ProfilePicture,
  ProfilePictureContainer,
  ProfilePictureWrapper,
  ProfileCardMainContainer,
  ProfileFriendContainer,
  ProfileBtns,
  AddFriendBtn,
  ViewFriendsBtn,
  RemoveFriendBtn,
} from "./styles/ProfileStyles/ProfileStyles";
import ProfileEditModal from "./ProfileEditModal";
import { CloseBtn } from "./styles/ProfileStyles/ProfileEditModalStyles";
import FriendsModal from "./FriendsModal";
import { addFriend, getFriends, removeFriend } from "./utils/apiHelpers";
import { AuthContext } from "./context/AuthContext";

const ProfileInfo = ({ name, id, userId, friends }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleFriends, setToggleFriends] = useState(false);
  const [usersFriends, setUsersFriends] = useState([]);

  const { user } = useContext(AuthContext);

  // Add friend
  const addFriendHandler = async (id, userId) => {
    await addFriend(id, userId);
  };

  // Remove friend
  const removeFriendHandler = async (id, userId) => {
    await removeFriend(id, userId);
  };

  // Displays Friend Modal and gets data (users friend) for modal
  const friendsHandlerModal = async (id) => {
    // Opens & closes modal
    setToggleFriends(!toggleFriends);

    // Check if user has friends, if not then don't call api
    if (friends.length !== 0) {
      // Gets friends from api
      await getFriends(id).then((data) => setUsersFriends(data));
    }
  };
  return (
    <ProfileCardMainContainer>
      <ProfileCardContainer>
        {toggleEdit ? (
          <>
            <ProfileEditModal id={id} />
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
              <ProfileBtns>
                {userId === id ? (
                  <EditBtn onClick={() => setToggleEdit(!toggleEdit)}>
                    <h5>Edit &#128295;</h5>
                  </EditBtn>
                ) : null}
              </ProfileBtns>
            </ProfileInfoContainer>
          </>
        )}
      </ProfileCardContainer>

      <ProfileFriendContainer>
        <p>Number of Friends: {friends?.length}</p>
        {/* If friends modal is opend display close friend modal */}
        {toggleFriends ? (
          <ViewFriendsBtn onClick={() => setToggleFriends(!toggleFriends)}>
            Close Modal &#10060;
          </ViewFriendsBtn>
        ) : (
          <ViewFriendsBtn onClick={() => friendsHandlerModal(id)}>
            View Friends &#128064;
          </ViewFriendsBtn>
        )}

        {userId !== id ? (
          <>
            {friends?.includes(userId) ? (
              <RemoveFriendBtn onClick={() => removeFriendHandler(id, userId)}>
                Remove Friend &#128549;
              </RemoveFriendBtn>
            ) : (
              <AddFriendBtn onClick={() => addFriendHandler(id, userId)}>
                Add a Friend &#128526;
              </AddFriendBtn>
            )}
          </>
        ) : null}
      </ProfileFriendContainer>

      {/* Friends Modal */}
      {toggleFriends ? (
        <FriendsModal
          toggleFriends={toggleFriends}
          setToggleFriends={setToggleFriends}
          usersFriends={usersFriends}
        />
      ) : null}
    </ProfileCardMainContainer>
  );
};

export default ProfileInfo;
