// Gets all posts
export const getPosts = async () => {
  try {
    const req = await fetch("/api/posts/");
    return await req.json();
  } catch (error) {
    console.log(error);
  }
};

// Likes post
export const likeHelper = async (id, myInit) => {
  try {
    return await fetch(`/api/posts/${id}/like`, myInit);
  } catch (error) {
    console.log(error);
  }
};

// Dislikes post
export const dislikeHelper = async (id, myInit) => {
  try {
    return await fetch(`/api/posts/${id}/dislike`, myInit);
  } catch (error) {
    console.log(error);
  }
};

// Deletes post
export const deletePostHelper = async (id) => {
  try {
    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

// Gets single post data
export const fetchPostData = async (userId) => {
  const req = await fetch(`/api/user?userId=${userId}`);
  return await req.json();
};

// Upload post
export const uploadPost = async (data) => {
  try {
    const req = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    return await req.json();
  } catch (error) {
    console.log(error);
  }
};

// Creates Post for uploading
export const createPost = async (desc, img, id) => {
  try {
    await fetch("/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        desc: desc,
        img: img,
        userId: id,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

// Gets profile data
export const fetchProfileData = async (username, id) => {
  try {
    const req = await fetch(`/api/posts/profile/${username}/${id}`);
    return await req.json();
  } catch (error) {
    console.log(error);
  }
};

// Deletes Comment
export const deleteCommentHelper = async (id, postId) => {
  try {
    await fetch(`/api/posts/delete/${id}/${postId}`, {
      method: "DELETE",
    });
    await window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

// Posts Comment
export const postComment = async (postId, text, userId) => {
  try {
    await fetch(`/api/posts/comment/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        userId,
      }),
    });

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

// Edits profiles username
export const editProfile = async (name, id) => {
  try {
    await fetch(`/api/user/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
      }),
    });
    localStorage.removeItem("user");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

// Lists all users friends from api
export const getFriends = async (id) => {
  try {
    const req = await fetch(`/api/user/friends/${id}`);
    const res = await req.json();
    return await res;
  } catch (error) {
    console.log(error);
  }
};

// Add a friend
export const addFriend = async (id, userId) => {
  try {
    await fetch(`/api/user/addFriend/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });

    await window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

// Removes a friend
export const removeFriend = async (id, userId) => {
  try {
    await fetch(`/api/user/removeFriend/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });
    await window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

// Get single user
export const getUserData = async (id) => {
  const req = await fetch(`/api/user?userId=${id}`);
  const res = await req.json();
  return res;
};

// Messages!

// Gets all conversations
export const getConversation = async (id) => {
  try {
    const req = await fetch(`/api/msgs/conversation/${id}`);
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get messages from conversation
export const getMessages = async (id) => {
  try {
    const req = await fetch(`/api/msgs/${id}`);
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

// find conversation
export const findConvo = async (userId, friendId) => {
  try {
    const req = await fetch(`/api/msgs/conversation/${userId}/${friendId}`);
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Send message
export const sendMsg = async (data) => {
  try {
    const req = await fetch("/api/msgs/sendMsg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
