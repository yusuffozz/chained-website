"use client";

const CONTRACT_ADDRESS =
  "FxbUc5uQKh5gbefwZt8n3NoKmowpSEpcsBKG3gqkpump";

const PUMPFUN_URL =
  `https://pump.fun/coin/${CONTRACT_ADDRESS}`;

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


        {/* RIGHT SIDE LOGOS */}
        <div className="flex items-center gap-5">

          {/* PUMPFUN */}
          <a
            href={PUMPFUN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CHAIN on Pump.fun"
            className="opacity-70 hover:opacity-100 transition"
          >
            <img
              src="/pumpfun.png"
              alt="Pump.fun"
              draggable={false}
              className="w-7 h-7 object-contain select-none"
            />
          </a>


          {/* X */}
          <a
            href="https://x.com/chainedpad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CHAINED on X"
            className="opacity-70 hover:opacity-100 transition"
          >
            <img
              src="/x.png"
              alt="X"
              draggable={false}
              className="w-6 h-6 object-contain select-none"
            />
          </a>

        </div>

      </nav>


      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-6">

        <div className="text-center max-w-4xl">

          {/* TOP LABEL */}
          <p className="text-sm tracking-[0.45em] text-gray-500 mb-8">
            A NETWORKED TOKEN LAUNCH &amp; ECONOMIC INFRASTRUCTURE
          </p>


          {/* CHAINED LOGO */}
          <div className="flex justify-center">

            <img
              src="/chained-header.png"
              alt="chained"
              draggable={false}
              className="w-[280px] md:w-[430px] h-auto object-contain select-none"
            />

          </div>


          {/* SLOGAN */}
          <p className="mt-8 text-xl md:text-2xl text-gray-400">
            Don&apos;t launch alone.
            <br />
            Build on a network.
          </p>


          {/* LAUNCHPAD STATUS */}
          <div className="mt-10">

            <span className="inline-block border border-white/20 px-6 py-3 text-sm tracking-[0.3em] text-gray-300">
              LAUNCHPAD COMING SOON
            </span>

          </div>


          {/* BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

            {/* LITEPAPER */}
            <a
              href="/litepaper"
              className="px-7 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
            >
              READ LITEPAPER
            </a>


            {/* BUY CHAIN */}
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-white/20 text-white text-sm hover:bg-white/10 transition"
            >
              BUY CHAIN
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