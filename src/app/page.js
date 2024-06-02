import React from "react";

const Home = () => {
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <header className="flex justify-between my-8 ">
        <a className="flex gap-1" href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="font-black">Captionz</span>
        </a>
        <nav className="flex gap-6 text-white/80">
          <a href="/">Home</a>
          <a href="">Pricing</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <div className="text-center mt-24 mb-10">
        <h1
          className="text-4xl capitalize font-black text-yellow-400"
          style={{ textShadow: "5px 5px 0 #000" }}
        >
          Create heart touching captions
        </h1>
        <h2 className="text-white/75 font-bold capitalize mt-8">
          Caption that suits your post the most
        </h2>
      </div>
      <div className="text-center">
        <button
          type="button"
          class="bg-blue-600 py-2 px-6 rounded-full inline-flex gap-2 font-bold hover:bg-blue-700 transition-colors duration-800 ease-in-out items-center border-2 border-pink-600/40 hover:border-pink-800/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
            />
          </svg>
          <span>Upload File</span>
        </button>
      </div>
      <div className="flex gap-32">
        <div className="bg-gray-800/50 w-[240px] h-[480px]"></div>
      </div>
    </main>
  );
};

export default Home;



// SEE FROM 30:00