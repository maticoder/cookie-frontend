import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";

const Notifier = ({ notifications, removeNotification }) => {
  const [displayed, setDisplayed] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  notifications.forEach((notification) => {
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

Notifier.contextTypes = {
  enqueueSnackbar: PropTypes.func,
};

Notifier.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      type: PropTypes.string,
      message: PropTypes.string,
    })
  ),
  removeNotification: PropTypes.func,
};

export default Notifier;
