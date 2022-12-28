import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import Loader from "./Loader";
import { fetchPostData, fetchProfileData } from "./utils/apiHelpers";
import { AuthContext } from "./context/AuthContext";

const Profile = () => {
  const { username, id } = useParams();
  const [posts, setPosts] = useState();
  const [info, setInfo] = useState({});
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const { username: name, friends } = info;

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
    const getData = async () => {
      await fetchProfileData(username, id).then((data) => setPosts(data));
      await fetchPostData(id).then((data) => setInfo(data));
    };
    getData();
  }, [id, username, user]);

  return (
    <>
      {posts === undefined ? (
        <Loader />
      ) : (
        <>
          <ProfileInfo
            id={id}
            userId={user.user._id}
            friends={friends}
            name={name}
          />
          <ProfilePosts id={id} posts={posts} />
        </>
      )}
    </>
  );
};

export default Profile;
