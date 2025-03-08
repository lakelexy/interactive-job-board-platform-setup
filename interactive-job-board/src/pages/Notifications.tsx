import { useEffect, useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(
      "https://jobboardbackend-production-0287.up.railway.app/api/jobs/{job_id}/applications/{application_id}/applications/"
    )
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Notifications</h1>
      {notifications.map((notif) => (
        <div key={notif.id} className="border p-4 rounded mb-4">
          <p>{notif.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
