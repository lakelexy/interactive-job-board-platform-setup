import { useEffect, useState } from "react";

interface Message {
  id: number;
  sender: string;
  message: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch(
      "https://jobboardbackend-production-0287.up.railway.app/api/applications/"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);

        // Ensure data is structured correctly
        if (Array.isArray(data)) {
          setMessages(
            data.map((item, index) => ({
              id: item.id || index, // Use index as fallback
              sender: item.sender || "Unknown Sender",
              message: item.message || "No message available",
            }))
          );
        } else {
          setMessages([]); // Set to empty array if data isn't valid
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessages([]);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Messages</h1>
      {messages.length > 0 ? (
        messages.map((msg) => (
          <div key={msg.id} className="border p-4 rounded mb-4">
            <h2 className="text-xl font-semibold">From: {msg.sender}</h2>
            <p>{msg.message}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No messages available.</p>
      )}
    </div>
  );
};

export default Messages;
