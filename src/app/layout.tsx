import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeakFlow",
  description: "AI чат за вербална комуникация",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 border-r border-gray-700">
        {/* Заглавие */}
        <h2 className="text-xl font-bold text-gray-300 mb-6">SpeakFlow</h2>

        {/* Меню */}
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/chat" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                🗨️ <span>Чат</span>
              </a>
            </li>
            <li>
              <a href="/projects" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                📁 <span>Проекти</span>
              </a>
            </li>
            <li>
              <a href="/settings" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                ⚙️ <span>Настройки</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* История на разговорите */}
        <div className="mt-6">
          <h3 className="text-gray-400 text-sm mb-2">История</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="text-sm p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
              Умения в комуникацията
            </li>
            <li className="text-sm p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
              Безплатни AI инструменти
            </li>
            <li className="text-sm p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
              Среща в Прага
            </li>
          </ul>
        </div>
      </aside>

      {/* Основно съдържание */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
