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

    // Тук ще добавим логика за AI отговори по-късно
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">SpeakFlow AI Chat</h1>
        
        <div className="h-80 overflow-y-auto border p-3 rounded-md bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-gray-900 self-start"}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="flex mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Напишете съобщение..."
            className="flex-1 border p-2 rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
          >
            ➤
          </button>
        </div>
      </div>
    </main>
  );
}
