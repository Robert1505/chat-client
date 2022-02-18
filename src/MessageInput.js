import React, { useState } from "react";
import "./MessageInput.css";

const NewMessage = ({ socket }) => {
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("Anonymous");

  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("message", {
      value: value,
      username: username
    });
    setValue("");
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          name="message"
          autoFocus
          value={value}
          placeholder="Type your message"
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
      </form>
      <input
        name="username"
        style={{ marginTop: 8, width: "500px", marginLeft: 20 }}
        value={username}
        placeholder="Type your username"
        onChange={(e) => {
          setUsername(e.currentTarget.value);
        }}
      />
    </>
  );
};

export default NewMessage;
