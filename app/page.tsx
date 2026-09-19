export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col select-none">

      {/* NAVBAR */}
      <nav className="w-full px-8 py-6 flex justify-between items-center">

        {/* CHAINED LOGO */}
        <a
          href="/"
          className="flex items-center"
        >
          <img
            src="/chained-header.png"
            alt="chained"
            draggable={false}
            className="h-10 md:h-12 w-auto object-contain select-none"
          />
        </a>

        {/* SOCIAL / LAUNCH LINKS */}
        <div className="flex items-center gap-6">

          {/* PUMPFUN */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            aria-label="Pump.fun"
          >
            <img
              src="/pumpfun.png"
              alt="Pump.fun"
              draggable={false}
              className="w-7 h-7 md:w-8 md:h-8 object-contain select-none"
            />
          </a>

          {/* X */}
          <a
            href="https://x.com/chainedpad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            aria-label="X"
          >
            <img
              src="/x.png"
              alt="X"
              draggable={false}
              className="w-7 h-7 md:w-8 md:h-8 object-contain select-none"
            />
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-6">

        <div className="text-center max-w-4xl">

          {/* SUBTITLE */}
          <p className="text-sm tracking-[0.45em] text-gray-500 mb-8">
            A NETWORKED TOKEN LAUNCH &amp; ECONOMIC INFRASTRUCTURE
          </p>


          {/* LARGE CHAINED LOGO */}
          <div className="flex justify-center mb-10">
            <img
              src="/chained-header.png"
              alt="chained"
              draggable={false}
              className="w-[280px] md:w-[400px] h-auto object-contain select-none"
            />
          </div>


          {/* SLOGAN */}
          <p className="text-xl md:text-2xl text-gray-400">
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