import React, { useState } from "react";
import { useSnackbar } from "notistack";

const Notifier = ({ notifications, removeNotification }) => {
  const [displayed, setDisplayed] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  notifications.map((notification) => {
    setTimeout(() => {
      if (displayed.filter((key) => key === notification.key).length > 0) {
        return;
      }

      enqueueSnackbar(notification.message, {
        variant: notification.type,
      });
      setDisplayed([...displayed, notification.key]);
      removeNotification(notification.key);
    }, 300);
  });

  return null;
};

export default Notifier;
