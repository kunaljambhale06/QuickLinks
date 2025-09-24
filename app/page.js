import Image from "next/image";
import Link from "next/link";

import { Geist_Mono } from "next/font/google";
import { inter } from "./layout";

export default function Home() {
  return (
    <main className="bg-orange-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-5 items-center justify-center ">
          <p className={`text-4xl font-bold ${inter.className}`}>
            The best URL shortener for you
          </p>
          <p className="px-38 text-center">
            It is one of the best URL shortener which is free to use and it is very easy to use.Instant create short links without any Login!!
            It is one of the fastest URL shortener you will ever find.Hassle free and Simple UI so that you can use it easily and very quickly.
          </p>
          <div className='flex gap-5 text-white'>
            <Link href="/shorten"><button className='bg-orange-400 shadow-lg p-3 py-0.5 rounded-lg font-bold'>Try Now</button></Link>
            <Link href="https://github.com/kunaljambhale06"><button className='bg-orange-400 shadow-lg p-3 py-0.5 rounded-lg font-bold'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="" alt="Image of a vector"
            src="/vector.jpg" fill={true}>
          </Image>
        </div>
      </section>
    </main>
  );
}
