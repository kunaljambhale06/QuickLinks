import Image from "next/image";
import Link from "next/link";
import { inter } from "./layout";

export default function Home() {
  return (
    <main className="bg-orange-100 min-h-screen flex items-center">
      <section className="grid md:grid-cols-2 grid-cols-1 items-center max-w-7xl mx-auto px-6 py-16 gap-10">
        
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left animate-fade-in">
          
          <h1
            className={`text-4xl md:text-5xl font-extrabold leading-tight text-orange-400 ${inter.className} `}
          >
            The Best URL Shortener For You 
          </h1>

          <p className="text-gray-700 max-w-xl text-lg leading-relaxed">
            One of the best URL shorteners that is completely free and super easy to use.
            Instantly create short links without any login. Fast, hassle-free, and built
            with a simple UI so you can generate links in seconds.
          </p>

          <div className="flex gap-6 mt-4">
            <Link href="/shorten">
              <button className="bg-orange-400 cursor-pointer hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 px-6 py-2 rounded-xl font-semibold text-white">
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/kunaljambhale06">
              <button className="border-2 border-orange-400 text-orange-500 cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 px-6 py-2 rounded-xl font-semibold">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            alt="Vector illustration"
            src="/vector.jpg"
            fill
            priority
            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
    </main>
  );
}
