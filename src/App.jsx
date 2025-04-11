import { useEffect, useState } from "react";

const BASE_URL = "https://b13o.github.io/tech-quotes-api";

async function fetchRandomQuote() {
  const id = Math.floor(Math.random() * 100) + 1;
  const response = await fetch(
    // "https://programming-quotesapi.vercel.app/api/random"
    `${BASE_URL}/api/quotes/${id}`
  );
  return response.json();
}

function App() {
  // 取得した名言のデータを変数で管理
  const [quote, setQuote] = useState(null);

  // コンポーネント描画時に動作する副作用
  useEffect(() => {
    let active = true;
    fetchRandomQuote().then((quote) => {
      if (active) {
        setQuote(quote);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pt-16 pb-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold">Random Quotes Generator</h1>

        <p className="text-gray-700">
          有名なプログラマの格言が、ランダムに表示されます。
          <br />
          先人の知恵に触れて、モチベーションを高めましょう！
        </p>

        <button
          className="bg-black text-white hover:bg-gray-700 flex mx-auto rounded-xl py-4 px-8"
          type="button"
        >
          <svg
            className="w-6 h-6 mr-2 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
            <path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" />
          </svg>
          Generate
        </button>
      </div>

      {/* Quote Card */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-blue-800 to-slate-700 shadow-md space-y-12 rounded-xl w-[720px] min-h-96 p-8">
          <div className="bg-blue-100 text-3xl h-16 w-16 rounded-full flex justify-center items-center">
            💬
          </div>

          <p className="text-center text-xl text-gray-200">{quote?.quote}</p>

          <p className="text-gray-300 text-center">by {quote?.author}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center">
        <p className="text-gray-700">
          Created by{" "}
          <a
            className="text-blue-600"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            @your-handle
          </a>{" "}
          &copy; 2025
        </p>
      </footer>
    </div>
  );
}

export default App;
