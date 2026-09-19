"use client";

import { useState } from "react";

const CONTRACT_ADDRESS =
  "FxbUc5uQKh5gbefwZt8n3NoKmowpSEpcsBKG3gqkpump";

const PUMPFUN_URL =
  `https://pump.fun/coin/${CONTRACT_ADDRESS}`;

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy contract address:", error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col select-none">

      {/* NAVBAR */}
      <nav className="w-full px-8 py-6 flex justify-between items-center">

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


          {/* CHAINED LOGO */}
          <div className="flex justify-center">
            <img
              src="/chained-header.png"
              alt="chained"
              draggable={false}
              className="w-[280px] md:w-[430px] h-auto object-contain select-none"
            />
          </div>


          <p className="mt-8 text-xl md:text-2xl text-gray-400">
            Don&apos;t launch alone.
            <br />
            Build on a network.
          </p>


          {/* OFFICIAL CONTRACT */}
          <div className="mt-10 mx-auto max-w-2xl">

            <p className="text-xs tracking-[0.3em] text-gray-600 mb-3">
              OFFICIAL CONTRACT
            </p>

            <div className="border border-white/10 bg-white/[0.02] px-4 py-4">

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition break-all"
                  title="Open CHAIN on Pump.fun"
                >
                  {CONTRACT_ADDRESS}
                </a>

                <button
                  onClick={copyAddress}
                  className="shrink-0 border border-white/15 px-4 py-2 text-xs tracking-[0.2em] text-gray-300 hover:bg-white hover:text-black transition"
                >
                  {copied ? "COPIED" : "COPY"}
                </button>

              </div>

            </div>

            <p className="mt-3 text-[11px] text-gray-600">
              Click the contract address to open CHAIN on Pump.fun.
            </p>

          </div>


          {/* COMING SOON */}
          <div className="mt-10">

            <span className="inline-block border border-white/20 px-6 py-3 text-sm tracking-[0.3em] text-gray-300">
              LAUNCHPAD COMING SOON
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