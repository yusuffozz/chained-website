export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      <nav className="w-full px-8 py-6 flex justify-between items-center">

        <a href="/" className="inline-flex items-center">
          <img
            src="/chained-header.png"
            alt="CHAINED"
            className="h-8 w-auto object-contain"
          />
        </a>

        <a
          href="https://x.com/chainedpad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          X
        </a>

      </nav>


      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-6">

        <div className="text-center max-w-4xl">

          <p className="text-sm tracking-[0.45em] text-gray-500 mb-8">
            A NETWORKED TOKEN LAUNCH & ECONOMIC INFRASTRUCTURE
          </p>


          {/* MAIN LOGO */}
          <div className="flex justify-center">
            <img
              src="/chained-header.png"
              alt="CHAINED"
              className="w-[430px] max-w-[85vw] h-auto object-contain"
            />
          </div>


          <p className="mt-8 text-xl md:text-2xl text-gray-400">
            Don&apos;t launch alone.
            <br />
            Build on a network.
          </p>


          {/* COMING SOON */}
          <div className="mt-10">
            <span className="inline-block border border-white/20 px-6 py-3 text-sm tracking-[0.3em] text-gray-300">
              COMING SOON
            </span>
          </div>


          {/* BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="/litepaper"
              className="px-7 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
            >
              READ LITEPAPER
            </a>

            <a
              href="https://x.com/chainedpad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-white/20 text-white text-sm hover:bg-white/10 transition"
            >
              FOLLOW ON X
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="px-8 py-6 text-center text-xs text-gray-600 tracking-widest">
        CHAINED · 2026
      </footer>

    </main>
  );
}