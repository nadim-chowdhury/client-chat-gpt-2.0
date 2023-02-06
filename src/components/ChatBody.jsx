import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

const ChatBody = ({ chat }) => {
  const aiStyle =
    "bg-white bg-opacity-20 backdrop-blur-lg dropshadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999] break-words border-2 rounded-xl self-end px-3 py-3 mx-w-[80%] ${
              message.sender === "ai" && aiStyle
            } `}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
};

export default ChatBody;