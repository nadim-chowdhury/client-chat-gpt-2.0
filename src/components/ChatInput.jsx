import React, { useState } from "react";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };

  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
      {loading ? (
        <p>typing...</p>
      ) : (
        <input
          onKeyDown={(e) => {
            e.keyCode === 13 && e.shiftKey === false && handleSubmit();
          }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          className="border-0 bg-transparent outline-none w-11/12"
        />
      )}
      <div
        onClick={handleSubmit}
        className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
      >
        <box-icon color="white" type="solid" name="send"></box-icon>
      </div>
    </div>
  );
};

export default ChatInput;
