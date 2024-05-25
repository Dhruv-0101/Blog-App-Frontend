import axios from "axios";
//create that must return a promise
const BASE_URL = "http://localhost:8080/api/v1/category";

//!Create post api
export const addCategoryAPI = async (postData) => {
  console.log(postData);
  const response = await axios.post(`${BASE_URL}/create-category`, postData, {
    withCredentials: true,
  });
  return response.data;
};

//! Fetch all catgories
export const fetchCategoriesAPI = async () => {
  const posts = await axios.get(`${BASE_URL}/get-all-category`);
  return posts.data;
};
export const fetchCategoriesPostCount = async () => {
  const posts = await axios.get(`${BASE_URL}/get-category-post`);
  return posts.data;
};
