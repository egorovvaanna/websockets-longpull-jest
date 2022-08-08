import axios from "axios";
import { useEffect, useState } from "react";

export const LongPulling = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/get-message");
      setMessages((prev) => [data, ...prev]);

      await subscribe();

    } catch (e) {

      setTimeout(() => {
        subscribe();
      }, 500);
    }
  };

  const sendMessage = async () => {
    await axios.post("http://localhost:5000/new-message", {
      message: value,
      id: Date.now(),
    });
  };

  return (
    <>
      <div className="form">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage}> send </button>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <p> {message.message} </p>
        ))}
      </div>
    </>
  );
};
