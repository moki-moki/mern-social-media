export const likeHelper = async (id, myInit) => {
  try {
    return await fetch("/posts/" + id + "/like", myInit);
  } catch (error) {
    console.log(error);
  }
};

export const dislikeHelper = async (id, myInit) => {
  try {
    return await fetch("/posts/" + id + "/dislike", myInit);
  } catch (error) {
    console.log(error);
  }
};

export const deletePostHelper = async (id) => {
  try {
    await fetch(`/posts/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostData = async (userId) => {
  const req = await fetch(`/user?userId=${userId}`);
  const data = await req.json();
  return data;
};

export const uploadPost = async (data) => {
  try {
    const req = await fetch("/upload", {
      method: "POST",
      body: data,
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (desc, img, id) => {
  try {
    const req = await fetch("/posts/create", {
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
    const res = req.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};