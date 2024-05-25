import React from "react";
import {
  fetchNotificationsAPI,
  readNotificationAPI,
} from "../../APIServices/notifications/nofitificationsAPI";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  getNotification,
  updateNotification,
} from "../../APIServices/posts/postsAPI";
const Notifications = () => {
  const { data: unreadNotifications, refetch } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotification,
  });

  //mutation
  const mutation = useMutation({
    mutationKey: ["read-notification"],
    mutationFn: updateNotification,
  });

  //read notification handler
  const readNotificationHandler = (id) => {
    mutation
      .mutateAsync(id)
      .then(() => {
        refetch();
      })
      .catch((e) => console.log(e));
  };
  console.log(mutation);
  return (
    <div className="flex justify-center items-start  h-screen bg-gray-100">
      <div className="max-w-md w-full mt-5 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gray-800 p-4 text-white text-lg font-semibold rounded-t-lg">
          Notifications
        </div>
        <div className="max-h-96 mt-3 overflow-auto">
          {unreadNotifications?.unreadCount === 0 ? (
            <p className="text-center text-gray-600 py-4">
              No new notifications
            </p>
          ) : (
            unreadNotifications?.notifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => readNotificationHandler(notification?.id)}
              >
                <div className="border-b cursor-pointer border-gray-200 px-4 py-3 hover:bg-gray-50 transition duration-300 ease-in-out">
                  {/* <p className="text-sm text-gray-800 font-medium">
                    {notification.message}
                  </p> */}
                  <p
                    className="text-sm text-gray-800 font-medium"
                    dangerouslySetInnerHTML={{ __html: notification.message }}
                  ></p>{" "}
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(notification.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
