import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  HamburgerContainer,
  NavbarContainer,
  NavbarDropdownLink,
  NavbarDropdownSignOut,
  NavDropdownCotnainer,
  NavItemWrapper,
  NavLeftSide,
  NavUserContainer,
  NavUserImg,
  NavUsername,
  ToggleBtn,
  ToggleContainer,
  ToggleItemWrapper,
  AdditionWrapper,
  NotificationContainer,
  NotificationNumber,
  NotificationTextContainer,
  NotificationArrow,
  NotificationMarkAsRead,
  NotificationMessagesContainer,
} from "./styles/NavbarStyles";

const Navbar = ({ user, setThemes, themes, socket }) => {
  const navRef = useRef(null);

  // toggle profile menu
  const [menu, setMenu] = useState(false);

  // toggle themes
  const [toggle, setToggle] = useState(false);

  // toggle hamburger
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const hamburgerRef = useRef(null);

  // toggle notifications
  const notifyRef = useRef(null);
  const [notifyMenu, setNotifyMenu] = useState(false);

  // notification messages
  const [notifications, setNotifications] = useState([]);

  // Toggle hamburger effect
  useEffect(() => {
    const closeHamburgerMenu = (e) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target) &&
        e.target.tagName !== "A"
      ) {
        setToggleHamburger(false);
      }
    };

    document.addEventListener("mousedown", closeHamburgerMenu);

    return () => {
      document.removeEventListener("mousedown", closeHamburgerMenu);
    };
  }, [hamburgerRef]);

  // Toggle notification effect
  useEffect(() => {
    const closeNotification = (e) => {
      if (
        notifyRef.current &&
        !notifyRef.current.contains(e.target) &&
        e.target.className !== "sc-khQegj FpLmh"
      ) {
        setNotifyMenu(false);
      }
    };

    document.addEventListener("mousedown", closeNotification);

    return () => {
      document.removeEventListener("mousedown", closeNotification);
    };
  }, [notifyRef]);

  const toggleNotifyMenu = () => {
    setNotifyMenu(!notifyMenu);
  };

  const toggleHamburgerMenu = () => {
    setToggleHamburger(!toggleHamburger);
  };

  const changeTheme = () => {
    if (themes === "light") {
      setThemes("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      setThemes("light");
      localStorage.setItem("theme", JSON.stringify("light"));
    }
    setToggle(!toggle);
  };

  useEffect(() => {
    let closeNavDropdown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", closeNavDropdown);

    return () => {
      document.removeEventListener("mousedown", closeNavDropdown);
    };
  });

  const handleDropdownMenu = () => {
    setMenu(!menu);
  };

  const signOutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  // Socket effect
  useEffect(() => {
    socket.current.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket, user]);

  const displayNotification = ({ senderName, type }, idx) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else {
      action = "disliked";
    }

    return <div key={idx}>{`${senderName} ${action} your post.`}</div>;
  };

  const handleMarkAsRead = () => {
    setNotifications([]);
  };

  return (
    <NavbarContainer>
      {user ? (
        <>
          <HamburgerContainer
            onClick={toggleHamburgerMenu}
            hamburgerToggle={toggleHamburger}
            ref={hamburgerRef}
          >
            <span></span>
            <span></span>
            <span></span>
          </HamburgerContainer>
          <NavUserContainer onClick={() => handleDropdownMenu()}>
            <NavUsername>{user.user.username}</NavUsername>
            <NavUserImg
              src={`https://avatars.dicebear.com/api/identicon/${user.user.username}.svg`}
            />
            {menu ? (
              <NavDropdownCotnainer ref={navRef}>
                <NavbarDropdownLink
                  to={`/profile/${user.user.username}/${user.user._id}`}
                >
                  Profile
                </NavbarDropdownLink>
                <NavbarDropdownSignOut onClick={() => signOutHandler()}>
                  Sign Out
                </NavbarDropdownSignOut>
              </NavDropdownCotnainer>
            ) : null}
          </NavUserContainer>
          <NavItemWrapper hamburgerToggle={toggleHamburger}>
            <NavLeftSide>
              <Link onClick={() => setToggleHamburger(false)} to="/">
                Home
              </Link>
              <Link
                style={{ margin: "0 1em" }}
                to="/about"
                onClick={() => setToggleHamburger(false)}
              >
                About
              </Link>
              <Link onClick={() => setToggleHamburger(false)} to="/createPost">
                Create a post
              </Link>
            </NavLeftSide>
          </NavItemWrapper>
          <AdditionWrapper>
            <NotificationContainer ref={notifyRef} onClick={toggleNotifyMenu}>
              <span> &#128276;</span>
              {notifications.length > 0 && (
                <NotificationNumber>{notifications.length}</NotificationNumber>
              )}

              {notifyMenu ? (
                <>
                  <NotificationArrow></NotificationArrow>
                  <NotificationTextContainer>
                    <NotificationMessagesContainer>
                      {/* Displays notifications */}
                      {notifications.map((notify, idx) =>
                        displayNotification(notify, idx)
                      )}
                    </NotificationMessagesContainer>
                    <NotificationMarkAsRead onClick={handleMarkAsRead}>
                      Mark as Read
                    </NotificationMarkAsRead>
                  </NotificationTextContainer>
                </>
              ) : null}
            </NotificationContainer>
            <Link to="/chat">&#128172;</Link>
            <ToggleContainer>
              <ToggleItemWrapper onClick={changeTheme}>
                <span>&#127774;</span>
                <span>&#127771;</span>
                <ToggleBtn toggle={toggle}></ToggleBtn>
              </ToggleItemWrapper>
            </ToggleContainer>
          </AdditionWrapper>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
