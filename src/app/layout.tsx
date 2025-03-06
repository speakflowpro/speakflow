// src/app/chat/page.tsx
"use client";

import { useState } from "react";
import { FaMicrophone, FaRegPaperPlane } from "react-icons/fa";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Здравей! Как мога да ти помогна днес?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput(""); // Изчистваме полето
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Заглавие */}
      <header className="p-4 border-b border-gray-700 text-center text-lg font-bold">
        Чат с AI
      </header>

      {/* Чат прозорец */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Контролен панел */}
      <div className="p-4 border-t border-gray-700 flex items-center bg-gray-800">
        <input
          type="text"
          className="flex-1 p-2 bg-gray-700 text-white rounded-md focus:outline-none"
          placeholder="Напишете съобщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage} className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-md">
          <FaRegPaperPlane />
        </button>
        <button className="ml-2 p-2 bg-red-600 hover:bg-red-700 rounded-full">
          <FaMicrophone />
        </button>
      </div>
    </div>
  );
}
