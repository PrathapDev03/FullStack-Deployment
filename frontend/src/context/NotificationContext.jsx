import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const NotificationContext =
  createContext();

export const NotificationProvider = ({
  children
}) => {

  const [notifications,
    setNotifications] =
    useState([]);

  useEffect(() => {

    const savedNotifications =
      JSON.parse(
        localStorage.getItem(
          "notifications"
        )
      ) || [];

    setNotifications(
      savedNotifications
    );

  }, []);

  useEffect(() => {

    localStorage.setItem(

      "notifications",

      JSON.stringify(
        notifications
      )

    );

  }, [notifications]);

  const addNotification =
    (message) => {

      const newNotification = {

        id: Date.now(),

        message,

        time:
          new Date()
            .toLocaleString()

      };

      setNotifications(
        (prev) => [

          newNotification,

          ...prev

        ]
      );

    };

  const clearNotifications =
    () => {

      setNotifications([]);

      localStorage.removeItem(
        "notifications"
      );

    };

  return (

    <NotificationContext.Provider

      value={{

        notifications,

        addNotification,

        clearNotifications

      }}

    >

      {children}

    </NotificationContext.Provider>

  );

};

export const useNotifications =
  () =>
    useContext(
      NotificationContext
    );