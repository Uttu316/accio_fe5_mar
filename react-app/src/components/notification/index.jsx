import { useEffect } from "react";
import "./notification.css";
const Notify = ({ message, closeNotification }) => {
  const onClose = () => {
    if (typeof closeNotification === "function") {
      closeNotification();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 2500);
  }, []);

  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Notify;
