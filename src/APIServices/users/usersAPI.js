import { BASE_URL } from "../../utils/baseEndpoint";
import axios from "axios";
import { startRegistration } from "@simplewebauthn/browser"; // Adjust the import as necessary
import { startAuthentication } from "@simplewebauthn/browser"; // Adjust the import as necessary

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
export const getFollowing = async () => {
  const response = await axios.get(`${BASE_URL}/users/get-following`, {
    withCredentials: true,
  });
  return response.data;
};
export const getFollowersCount = async () => {
  const response = await axios.get(
    `${BASE_URL}/users/get-followers-dashboard-count`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
export const getFollowingsCount = async () => {
  const response = await axios.get(
    `${BASE_URL}/users/get-followings-dashboard-count`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
export const getEarningCount = async () => {
  const response = await axios.get(`${BASE_URL}/users/get-earning-dashboard`, {
    withCredentials: true,
  });
  return response.data;
};

export const registerPassKey = async () => {
  const response = await axios.post(
    `${BASE_URL}/users/register-passkey`,
    {},
    {
      withCredentials: true,
    }
  );

  // Directly access response.data
  const challengeResult = response.data;
  const { options } = challengeResult; // Server side challenge

  const authenticationResult = await startRegistration({
    ...options,
  });

  console.log(authenticationResult);

  const registerVerifyResponse = await axios.post(
    `${BASE_URL}/users/register-passkey-verify`,
    { cred: authenticationResult },
    { withCredentials: true }
  );
  console.log(registerVerifyResponse.data);
};

// export const loginpasskey = async () => {
//   const response = await axios.post(
//     `${BASE_URL}/users/login-passkey`,
//     {},
//     {
//       withCredentials: true,
//     }
//   );

//   // Directly access response.data
//   const challengeResult = response.data;
//   const { options } = challengeResult; // Server side challenge

//   const authenticationResult = await startAuthentication({
//     ...options,
//   });

//   console.log(authenticationResult);

//   const loginVerifyResponse = await axios.post(
//     `${BASE_URL}/users/login-passkey-verify`,
//     { cred: authenticationResult },
//     { withCredentials: true }
//   );
//   console.log(loginVerifyResponse.data);
// };

export const loginpasskey = async (username) => {
  const response = await axios.post(
    `${BASE_URL}/users/login-passkey`,
    { username },
    {
      withCredentials: true,
    }
  );

  // Directly access response.data
  const challengeResult = response.data;
  const { options } = challengeResult; // Server side challenge

  const authenticationResult = await startAuthentication({
    ...options,
  });

  console.log(authenticationResult);

  const loginVerifyResponse = await axios.post(
    `${BASE_URL}/users/login-passkey-verify`,
    { username, cred: authenticationResult },
    { withCredentials: true }
  );
  console.log(loginVerifyResponse.data);
};
