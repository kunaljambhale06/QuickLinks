export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import clientPromise from "../../lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("QuickLink");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (doc) {
    redirect(doc.url); // redirect to original URL
  } else {
    redirect("/"); // fallback
  }

  // This will never render because redirect() ends the response,
  // but Next.js requires a return value, so it's fine to leave it.
  return <div>Redirecting {shorturl}...</div>;
}
