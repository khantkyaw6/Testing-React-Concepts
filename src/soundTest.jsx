import React, { useState, useEffect } from "react";
import notiSound from "../src/notifications-sound-127856.mp3";

const SoundTest = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  const showNotification = () => {
    if (Notification.permission === "granted") {
      const notification = new Notification("Notification Title", {
        body: `Notification #${notificationCount + 1}: Something happened!`,
        icon: "your-icon-url.png",
      });

      const audio = new Audio(notiSound);
      audio.play();

      setNotificationCount(notificationCount + 1);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const notification = new Notification("Notification Title", {
            body: `Notification #${notificationCount + 1}: Something happened!`,
            icon: "your-icon-url.png",
          });

          const audio = new Audio(notiSound);
          audio.play();

          setNotificationCount(notificationCount + 1);
        }
      });
    }
  };

  useEffect(() => {
    document.title = `(${notificationCount + 1}) Vite + React`;
  }, [notificationCount]);

  return (
    <div>
      <button onClick={showNotification}>Show Notification with Sound</button>
      <p>Notification Count: {notificationCount}</p>
    </div>
  );
};

export default SoundTest;
