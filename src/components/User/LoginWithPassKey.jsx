//real
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  checkAuthStatusAPI,
  loginAPI,
  loginpasskey,
} from "../../APIServices/users/usersAPI";
import AlertMessage from "../Alert/AlertMessage";
import { isAuthenticated } from "../../redux/slices/authSlices"; // Adjust the import based on your project structure

const LoginWithPasskey = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const userMutation = useMutation({
  //     mutationKey: ["user-registration"],
  //     mutationFn: loginAPI,
  //   });

  // useQuery for checking auth status
  const { isError, isLoading, data, error, isSuccess, refetch } = useQuery({
    queryKey: ["user-auth"],
    queryFn: checkAuthStatusAPI,
    enabled: false, // disable automatic query execution
  });

  const loginPasskeyMutation = useMutation({
    mutationKey: ["login-passkey"],
    mutationFn: ({ username }) => loginpasskey(username),
    onSuccess: (data) => {
      console.log("Passkey login successful");
      //   dispatch(isAuthenticated(data));
      //   navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Error during passkey login:", error);
    },
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(isAuthenticated(data));
    }
  }, [data, dispatch, isSuccess]);

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
    }),
    onSubmit: async (values) => {
      try {
        await loginPasskeyMutation
          .mutateAsync({ username: values.username })
          .then(() => {
            navigate("/dashboard");
            refetch();
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log("Error during form submission:", err);
      }
    },
  });

  return (
    <div className="flex flex-wrap pb-24">
      <div className="w-full p-4">
        <div className="flex flex-col justify-center py-24 max-w-md mx-auto h-full">
          <form onSubmit={formik.handleSubmit}>
            <Link
              to="/register"
              className="inline-block text-gray-500 hover: transition duration-200 mb-8"
            >
              <span>Don't have an account?</span> {""}
              <span className="font-bold font-heading">Register</span>
            </Link>

            {loginPasskeyMutation.isLoading && (
              <AlertMessage type="loading" message="Loading please wait..." />
            )}
            {loginPasskeyMutation.isSuccess && (
              <AlertMessage type="success" message="Login success" />
            )}
            {loginPasskeyMutation.isError && (
              <AlertMessage
                type="error"
                message={
                  loginPasskeyMutation.error.response?.data?.message ||
                  "An error occurred"
                }
              />
            )}

            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Login With PassKey
            </label>
            <input
              className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200 mb-4"
              type="text"
              placeholder="Enter Your Username"
              id="username"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 mt-1">{formik.errors.username}</div>
            )}

            <button
              className="h-14 inline-flex items-center justify-center py-4 px-6 text-white font-bold font-heading rounded-full bg-orange-500 w-full text-center border border-orange-600 shadow hover:bg-orange-600 focus:ring focus:ring-orange-200 transition duration-200 mb-8"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginWithPasskey;
