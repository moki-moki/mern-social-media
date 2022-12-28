import { useEffect, useState } from "react";
import { ConversationImg, ConversationMainContainer } from "./styles/ConversationStyles/ConversationStyles";
import { getUserData } from "./utils/apiHelpers";

const Conversation = ({ con, id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = con.members.find((m) => m !== id);

    const getUser = async () => {
      getUserData(friendId).then((data) => setUser(data));
    };
    getUser();
  }, [con, id]);

  return (
    <ConversationMainContainer>
      <ConversationImg src={`https://avatars.dicebear.com/api/identicon/${user?.username}.svg`} alt="" />
      <span>{user?.username}</span>
    </ConversationMainContainer>
  );
};

export default Conversation;
