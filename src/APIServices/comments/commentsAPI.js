import axios from "axios";
//create that must return a promise
const BASE_URL = "http://localhost:8080/api/v1/comment";

export const createCommentAPI = async ({ content, postId }) => {
  console.log(content, postId);
  const response = await axios.post(
    `${BASE_URL}/create-comment/${postId}`,
    { content },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getCommentsAPI = async (postId) => {
  const response = await axios.get(`${BASE_URL}/get-comments/${postId}`, {
    withCredentials: true,
  });
  return response.data;
};
