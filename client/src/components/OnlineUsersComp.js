import { useEffect, useState } from "react";
import { findConvo, getFriends } from "./utils/apiHelpers";
import {
  ConversationImg,
  ConversationMainContainer,
} from "./styles/ConversationStyles/ConversationStyles";

const OnlineUsersComp = ({ userId, setCurrentChat, onlineUsers }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getUsersFriends = async (id) => {
      await getFriends(id).then((data) => setFriends(data));
    };

    getUsersFriends(userId);
  }, [userId]);

  // call online users on load
  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  //find convo
  const findConversation = async (userId, friendId) => {
    await findConvo(userId, friendId).then((data) => setCurrentChat(data));
  };

  return (
    <div>
      {onlineFriends.map((onlineFriend) => (
        <ConversationMainContainer
          key={onlineFriend.id}
          onClick={() => findConversation(onlineFriend._id, userId)}
        >
          <ConversationImg
            src={`https://avatars.dicebear.com/api/identicon/${onlineFriend.username}.svg`}
            alt=""
          />
          <span>{onlineFriend.username}</span>
        </ConversationMainContainer>
      ))}
    </div>
  );
};

export default OnlineUsersComp;
