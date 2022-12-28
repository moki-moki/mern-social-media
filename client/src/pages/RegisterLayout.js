import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FormButton, FormControl, Input, Labels, SpanForm } from "../components/styles/FormStyles";
import { useHistory } from "react-router";
import NotificationFail from "../components/NotificationFail";

const RegisterLayout = () => {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const history = useHistory();

  const [err, setErr] = useState(false);

  const registerHandler = async (e) => {
    e.preventDefault();

    const myInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    };

    try {
      const req = await fetch("/api/auth/register", myInit);
      const data = await req.json();

      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (error) {
      console.log(error);
      setErr(!err);
    }
  };

  return (
    <div>
      <FormControl onSubmit={registerHandler}>
        <h2>REGISTER</h2>
        <Labels htmlFor="name">Username</Labels>
        <Input type="text" required id="name" placeholder="username" ref={username} />
        <Labels htmlFor="email">Email</Labels>
        <Input type="text" required id="email" placeholder="email" ref={email} />
        <Labels htmlFor="password">Password</Labels>
        <Input type="password" required minLength="6" id="password" placeholder="password" ref={password} />
        <FormButton type="submit">Register</FormButton>
        <SpanForm>
          Already have an account? <Link to="/login">Login</Link>
        </SpanForm>
      </FormControl>
      {err ? <NotificationFail text={"Try different Username or Email..."} /> : null}
    </div>
  );
};

export default RegisterLayout;
