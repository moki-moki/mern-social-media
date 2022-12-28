import { PostCardButtonDelete } from "./styles/PostCardStyles";
import { FriendContainer, FriendImage, FriendNameAndImageContainer, FriendsContainer, FriendsModalMainContainer, ModalCloseContainer, ModalOverlay } from "./styles/ProfileStyles/FriendsModalStyles";

const FriendsModal = ({ usersFriends, toggleFriends, setToggleFriends }) => {
  return (
    <ModalOverlay>
      <FriendsModalMainContainer>
        {/* Exit Modal Btn */}
        <ModalCloseContainer>
          <PostCardButtonDelete onClick={() => setToggleFriends(!toggleFriends)}>&#10060;</PostCardButtonDelete>
        </ModalCloseContainer>
        <FriendsContainer>
          {usersFriends.map((friend) => (
            <FriendContainer key={friend._id}>
              <FriendNameAndImageContainer>
                <FriendImage src={`https://avatars.dicebear.com/api/identicon/${friend.username}.svg`} />
                <h5>{friend.username}</h5>
              </FriendNameAndImageContainer>
            </FriendContainer>
          ))}
        </FriendsContainer>
      </FriendsModalMainContainer>
    </ModalOverlay>
  );
};

export default FriendsModal;
