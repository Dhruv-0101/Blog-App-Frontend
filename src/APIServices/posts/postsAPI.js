import axios from "axios";
//create that must return a promise
const BASE_URL = "http://localhost:8080/api/v1/post";

//!Create post api
export const createPostAPI = async (postData) => {
  console.log(postData);
  const response = await axios.post(`${BASE_URL}/create-post`, postData, {
    withCredentials: true,
  });
  return response.data;
};
//!update post api
export const updatePostAPI = async ({ formData, postId }) => {
  const response = await axios.put(
    `${BASE_URL}/${postId}`,

    formData,

    {
      withCredentials: true,
    }
  );
  return response.data;
};
//! Fetch all posts
export const fetchAllPosts = async (filters) => {
  console.log(filters);
  const posts = await axios.get(`${BASE_URL}/get-posts`, {
    params: filters,
  });
  return posts.data;
};
//! Fetch  post
export const fetchPost = async (postId) => {
  const posts = await axios.get(`${BASE_URL}/get-single-post/${postId}`, {
    withCredentials: true,
  });
  return posts.data;
};
//! delete  post
export const deletePostAPI = async (postId) => {
  const posts = await axios.delete(`${BASE_URL}/${postId}`, {
    withCredentials: true,
  });
  return posts.data;
};

//!like post api
export const likePostAPI = async (postId) => {
  const response = await axios.post(
    `${BASE_URL}/like-post/${postId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//!dislike post api
export const dislikePostAPI = async (postId) => {
  const response = await axios.post(
    `${BASE_URL}/dislike-post/${postId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const dislikeCountApi = async (postId) => {
  const response = await axios.get(`${BASE_URL}/dislike-count/${postId}`);
  return response.data;
};
export const likeCountApi = async (postId) => {
  const response = await axios.get(`${BASE_URL}/like-count/${postId}`);
  return response.data;
};

export const getUserPosts = async () => {
  const response = await axios.get(`${BASE_URL}/my-posts`, {
    withCredentials: true,
  });
  return response.data;
};
export const myPostViews = async () => {
  const response = await axios.get(`${BASE_URL}/my-posts-views`, {
    withCredentials: true,
  });
  return response.data;
};
export const myPostCount = async () => {
  const response = await axios.get(`${BASE_URL}/my-posts-count`, {
    withCredentials: true,
  });
  return response.data;
};
export const getPostLikes = async () => {
  const response = await axios.get(`${BASE_URL}/my-posts-like`, {
    withCredentials: true,
  });
  return response.data;
};
export const getPostDisLikes = async () => {
  const response = await axios.get(`${BASE_URL}/my-posts-dislike`, {
    withCredentials: true,
  });
  return response.data;
};
