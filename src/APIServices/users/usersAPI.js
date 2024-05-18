import { BASE_URL } from "../../utils/baseEndpoint";
import axios from "axios";

// ! Register user
export const registerAPI = async (userData) => {
  const response = await axios.post(`${BASE_URL}/users/create-user`, {
    username: userData?.username,
    password: userData?.password,
    email: userData?.email,
  });

  return response.data;
};
// ! login user
export const loginAPI = async (userData) => {
  const response = await axios.post(
    `${BASE_URL}/users/login-user`,
    {
      username: userData?.username,
      password: userData?.password,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
};

//http://localhost:5000/api/v1/users/checkAuthenticated
// ! checkAuthStatus user
export const checkAuthStatusAPI = async () => {
  const response = await axios.get(`${BASE_URL}/users/checkAuthenticated`, {
    withCredentials: true,
  });

  return response.data;
};
// ! user profile
export const userProfileAPI = async () => {
  const response = await axios.get(`${BASE_URL}/users/profile`, {
    withCredentials: true,
  });
  return response.data;
};

// ! logout user
export const logoutAPI = async (userData) => {
  const response = await axios.post(
    `${BASE_URL}/users/logout`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};

// ! follw user
export const followUserAPI = async (userId) => {
  const response = await axios.post(
    `${BASE_URL}/users/follow-user/${userId}`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};
// ! unfollw user
export const unfollowUserAPI = async (userId) => {
  const response = await axios.post(
    `${BASE_URL}/users/unfollow-user/${userId}`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};
export const FollowUnFollowAPI = async (targetId) => {
  const response = await axios.get(
    `${BASE_URL}/users/get-user-follow/${targetId}`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

// ! send Email verification token
export const sendEmailVerificatonTokenAPI = async () => {
  const response = await axios.post(
    `${BASE_URL}/users/email-verify`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};
// ! updateEmailAPI
export const updateEmailAPI = async (email) => {
  const response = await axios.put(
    `${BASE_URL}/users/update-email`,
    {
      email,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
};

// !Verify user account
export const verifyUserAccountAPI = async (verifyToken) => {
  const response = await axios.post(
    `${BASE_URL}/users/email-verification/${verifyToken}`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};
// !forgot password
export const forgotPasswordAPI = async (email) => {
  const response = await axios.post(
    `${BASE_URL}/users/resetpssword-email`,
    {
      email,
    }
    // {
    //   withCredentials: true,
    // }
  );

  return response.data;
};
// !upload profile pic
export const uplaodProfilePicAPI = async (formData) => {
  const response = await axios.put(
    `${BASE_URL}/users/upload-profilephoto`,
    formData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

// !reset password
export const resetPasswordAPI = async (data) => {
  const response = await axios.post(
    `${BASE_URL}/users/password-reset/${data?.verifyToken}`,
    {
      password: data?.password,
    }
    // {
    //   withCredentials: true,
    // }
  );

  return response.data;
};

export const getFollowers = async () => {
  const response = await axios.get(`${BASE_URL}/users/get-followers`, {
    withCredentials: true,
  });
  return response.data;
};
