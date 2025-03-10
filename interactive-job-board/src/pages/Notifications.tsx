import { useEffect, useState } from "react";

interface Notification {
  id: string;
  message: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [error, setError] = useState<string | null>(null);

  const jobId = "someJobId"; // Replace with actual job ID (from props, state, or context)
  const applicationId = "someApplicationId"; // Replace with actual application ID

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(
          `https://jobboardbackend-production-0287.up.railway.app/api/jobs/${jobId}`
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setNotifications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchNotifications();
  }, [jobId, applicationId]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Notifications</h1>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : notifications.length > 0 ? (
        notifications.map((notif) => (
          <div key={notif.id} className="border p-4 rounded mb-4">
            <p>{notif.message}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No notifications available.</p>
      )}
    </div>
  );
};

export default Notifications;
