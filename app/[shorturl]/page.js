import { redirect } from "next/navigation"
import clientPromise from "../../lib/mongodb"

export default async function Page({ params }) {
    const shorturl = params.shorturl;


    const client = await clientPromise;
    const db = client.db("QuickLink");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl });

    if (doc) {

        redirect(doc.url)
    }else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    return <div>My Post: {shorturl}</div>
}