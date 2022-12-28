import { useContext, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AuthContext } from "./components/context/AuthContext";
import { io } from "socket.io-client";
import GlobalStyles from "./components/styles/GlobalStyles";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import RegisterLayout from "./pages/RegisterLayout";
import HomepageLayout from "./pages/HomepageLayout";
import LoginLayout from "./pages/LoginLayout";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile";
import theme from "./components/styles/theme";
import ChatWindow from "./components/ChatWindow";

function App() {
  const { user } = useContext(AuthContext);

  const [themes, setThemes] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");

  const socket = useRef();

  socket.current = io("ws://localhost:5000");

  useEffect(() => {
    socket.current.emit("getUser", user);

    socket.current.emit("addUser", user?.user._id, user?.user.username);
  }, [user]);

  return (
    <Router>
      <ThemeProvider theme={theme[themes]}>
        <GlobalStyles />

        <Navbar socket={socket} themes={themes} setThemes={setThemes} user={user} />

        <Switch>
          <Route exact path="/">
            <HomepageLayout socket={socket} />
          </Route>
          <Route path="/login">{!user ? <LoginLayout /> : <Redirect to="/" />}</Route>
          <Route path="/register">{!user ? <RegisterLayout /> : <Redirect to="/" />}</Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/createPost">
            <CreatePost />
          </Route>
          <Route path="/posts/:id">
            <SinglePost socket={socket} />
          </Route>
          <Route path="/profile/:username/:id">
            <Profile />
          </Route>
          <Route path="/chat">{user ? <ChatWindow socket={socket} /> : <Redirect to="/login" />}</Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
