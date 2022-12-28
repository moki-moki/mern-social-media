import { useEffect, useState } from "react";
import {
  MessageContainer,
  MessageImg,
  MsgStamp,
  UserContainer,
} from "./styles/MessageStyles/MessageStyles";
import { getUserData } from "./utils/apiHelpers";
import moment from "moment";

const Message = ({ text, senderId, id, stamp }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Gets user data
    const getUser = async () => {
      await getUserData(senderId).then((data) => setUser(data));
    };

    getUser();
  }, []);

  return (
    <MessageContainer self={senderId === id}>
      <UserContainer>
        <MessageImg
          src={`https://avatars.dicebear.com/api/identicon/${user?.username}.svg`}
        />
        <p>{text}</p>
        <MsgStamp>{moment(stamp).format("LT")}</MsgStamp>
      </UserContainer>
    </MessageContainer>
  );
};

export default Message;
