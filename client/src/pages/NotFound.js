import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext";
import { NotFoundContainer } from "../components/styles/NotFoundStyles/NotFoundStyles";

const NotFound = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);

  return (
    <NotFoundContainer>
      <h1>404 NOT FOUND &#128565;</h1>
    </NotFoundContainer>
  );
};

export default NotFound;
