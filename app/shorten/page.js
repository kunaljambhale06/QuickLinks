"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");
    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {

                seturl("");
                setshorturl("");
                console.log(result)
                    if (result.success) {
                        // Use shorturl from API response if available, else fallback to input
                        const shortPath = result.shorturl || shorturl;
                        setgenerated(`${window.location.origin}/${shortPath}`);
                    } else {
                        setgenerated("");
                    }
                    alert(result.message)
            })
            .catch((error) => console.error(error));
    }
    //const handleChange = (e) => {
    //  seturl(e.target.value);
    //}
    return (
        <div className='mx-auto max-w-lg bg-orange-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-3xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-3'>
                <input type="text" placeholder='Enter your long URL here'
                    value={url}
                    className='p-4 focus:outline-orange-400 rounded-md py-2 bg-orange-100 shadow-lg p-3 py-0.5 rounded-lg font-bold'
                    onChange={e => seturl(e.target.value)}
                />
                <input type="text" placeholder='Enter name for your short URL'
                    value={shorturl}
                    className='p-4 focus:outline-orange-400 rounded-md py-2 bg-orange-100 shadow-lg p-3 py-0.5 rounded-lg font-bold'
                    onChange={e => setshorturl(e.target.value)}
                />
                <button onClick={generate} className='p-4 focus:outline-orange-400 my-4 rounded-md py-2 bg-orange-400 shadow-lg p-3 py-0.5 rounded-lg font-bold cursor-pointer'
                >Generate Your Short URL</button>
            </div>
            {generated && <>
                <span>Your short URL is:</span> <code> <Link target='_blank' href={generated} className='text-blue-500 underline'>{generated}</Link>
            </code> </>}
        </div>
    )
}

export default Shorten