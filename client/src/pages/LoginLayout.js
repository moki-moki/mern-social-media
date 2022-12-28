import { useContext, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginCall } from "../components/auth/apiCalls";
import { AuthContext } from "../components/context/AuthContext";
import NotificationFail from "../components/NotificationFail";
import { FormButton, FormControl, Input, SpanForm } from "../components/styles/FormStyles";

const LoginLayout = () => {
  const password = useRef();
  const email = useRef();
  const { user, error, dispatch } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginCall(
        {
          email: email.current.value,
          password: password.current.value,
        },
        dispatch
      );
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <FormControl onSubmit={(e) => handleLogin(e)}>
        <Input placeholder="Email" type="email" required ref={email} />

        <Input placeholder="Password" type="password" required minLength="6" ref={password} />
        <FormButton type="submit">LOGIN</FormButton>
        <SpanForm>
          Don't have an account? <Link to="/register">Register</Link>
        </SpanForm>
      </FormControl>
      {error ? <NotificationFail text={"Wrong Credentials..."} /> : null}
    </div>
  );
};

export default LoginLayout;
