import axios from "axios";
//create that must return a promise
const BASE_URL = "http://localhost:8080/api/v1/plan";

//!Create post api
export const paymentIntentAPI = async (planId) => {
  const response = await axios.post(
    `${BASE_URL}/plan-payment/${planId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//!payment verification
export const paymentVerificationAPI = async (paymentId) => {
  const response = await axios.post(
    `${BASE_URL}/plan-payment-verify/${paymentId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//!Free pln
export const freePlanAPI = async () => {
  const response = await axios.get(`${BASE_URL}/free-plan`, {
    withCredentials: true,
  });
  return response.data;
};
