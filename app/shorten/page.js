"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");
    const [copied, setCopied] = useState(false);

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
                    const shortPath = result.shorturl || shorturl;
                    setgenerated(`${window.location.origin}/${shortPath}`);
                } else {
                    setgenerated("");
                }
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(generated);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

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
            {generated && (
                <>
                    <span>Your short URL is:</span>
                    <div className='flex items-center gap-2 bg-orange-100 shadow-lg rounded-lg px-3 py-2'>
                        <code className='flex-1 truncate'>
                            <Link target='_blank' href={generated} className='text-blue-500 underline'>
                                {generated}
                            </Link>
                        </code>
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-sm shadow-md transition-all duration-200 cursor-pointer
                                ${copied
                                    ? 'bg-green-400 text-white scale-95'
                                    : 'bg-orange-400 text-white hover:bg-orange-500 active:scale-95'
                                }`}
                        >
                            {copied ? (
                                <>
                                    {/* Checkmark icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Copied!
                                </>
                            ) : (
                                <>
                                    {/* Copy icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                    </svg>
                                    Copy
                                </>
                            )}
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Shorten