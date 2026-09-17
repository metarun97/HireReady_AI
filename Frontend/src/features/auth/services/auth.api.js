import axios from "axios";


/* Axios instance to reduce repetation */
const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
})


/* Register API */
export const register = async ({ username, email, password }) => {
  try {
    const response = await api.post("/api/auth/register",
      { username, email, password },
    )

    return response.data;

  } catch (error) {

    console.log("Register error: ", error);

  }
}

/* Login API */
export const login = async ({ email, password }) => {
  try {
    const response = await api.post("/api/auth/login",
      { email, password },
    )

    return response.data;

  } catch (error) {

    console.log("Login error: ", error);

  }
}

/* Logout API */
export const logout = async () => {
  try {
    const response = await api.get("/api/auth/logout");

    return response.data;

  } catch (error) {

    console.log("Logout error: ", error);

  }
}

/* GetMe API */
export const getMe = async () => {
  try {
    const response = await api.get("/api/auth/get-me");

    return response.data;

  } catch (error) {

    console.log("Getme error: ", error);

  }
}
