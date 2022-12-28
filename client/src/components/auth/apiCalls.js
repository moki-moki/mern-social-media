export const loginCall = async ({ email, password }, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  const myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  try {
    const res = await fetch("/api/auth/login", myInit);
    const data = await res.json();

    await dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error });
  }
};
