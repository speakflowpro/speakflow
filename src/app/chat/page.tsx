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

    // Тук ще добавим AI интеграция по-късно
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Контейнер за чата */}
      <div className="w-full max-w-2xl bg-gray-800 border border-gray-700 shadow-lg rounded-lg p-6">
        {/* Заглавие */}
        <h1 className="text-2xl font-bold text-center text-green-400 mb-4">
          SpeakFlow AI Chat
        </h1>

        {/* Чат прозорец */}
        <div className="h-96 overflow-y-auto border border-gray-600 rounded-lg p-4 bg-gray-700 shadow-inner">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-3 p-3 rounded-lg max-w-sm ${msg.sender === "user" ? "bg-green-500 text-white self-end ml-auto" : "bg-gray-500 text-gray-200 self-start"}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Поле за въвеждане на текст */}
        <div className="flex mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Напишете съобщение..."
            className="flex-1 border border-gray-600 p-3 rounded-l-lg focus:outline-none bg-gray-800 text-white"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white px-5 py-3 rounded-r-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
          >
            ➤
          </button>
        </div>
      </div>
    </main>
  );
}
