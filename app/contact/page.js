
"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-8 my-16 bg-orange-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="text-center mb-8">
        You can find me on the following platforms:
      </p>

      <div className="flex flex-col gap-4">
        <Link
          href="https://github.com/kunaljambhale06"
          target="_blank"
          className="p-4 rounded-lg bg-white shadow hover:bg-gray-100 transition"
        >
          🌐 GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/kunal-jambhale-518550285/"
          target="_blank"
          className="p-4 rounded-lg bg-white shadow hover:bg-gray-100 transition"
        >
          💼 LinkedIn
        </Link>

        <Link
          href="mailto:jambhalekunal06@gmail.com"
          className="p-4 rounded-lg bg-white shadow hover:bg-gray-100 transition"
        >
          📧 Email
        </Link>
      </div>
    </div>
  );
}
