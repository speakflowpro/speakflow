"use client";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-indigo-700 to-orange-500 text-white p-6">
      <div className="w-full max-w-3xl bg-white text-gray-900 shadow-2xl rounded-3xl p-8 relative">
        {/* Заглавие с анимация */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-700 animate-pulse">
          SpeakFlow AI Chat
        </h1>

        {/* Чат кутия */}
        <div className="h-96 overflow-y-auto border-4 border-orange-500 rounded-xl p-4 bg-blue-50 shadow-inner mt-6">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-3 p-3 rounded-lg max-w-sm ${msg.sender === "user" ? "bg-orange-600 text-white self-end ml-auto" : "bg-blue-300 text-gray-900 self-start"}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Поле за въвеждане на текст */}
        <div className="flex mt-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Напишете съобщение..."
            className="flex-1 border-2 border-orange-500 p-3 rounded-l-lg focus:outline-none bg-white text-gray-900"
          />
          <button
            onClick={handleSendMessage}
            className="bg-orange-600 text-white px-5 py-3 rounded-r-lg text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
          >
            ➤
          </button>
        </div>
      </div>
    </main>
  );
}
