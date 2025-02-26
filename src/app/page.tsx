export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-2xl text-center p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-blue-600">Добре дошли в SpeakFlow!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Практикувайте вербална комуникация с помощта на AI и усъвършенствайте уменията си.
        </p>
        <a href="/start" className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
          Започни сега
        </a>
      </div>
    </main>
  );
}
