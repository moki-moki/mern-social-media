import { NotificationFailContainer } from "./styles/NotificationStyles/NotificationFailStyles";
import { NotificationSuccessText } from "./styles/NotificationStyles/NotificationSuccess";

const NotificationFail = ({ text }) => {
  return (
    <NotificationFailContainer>
      <NotificationSuccessText>{text}</NotificationSuccessText>
    </NotificationFailContainer>
  );
};

export default NotificationFail;
