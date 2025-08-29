
# QuickLinks 🔗

 A simple URL Shortener project built with Next.js and MongoDB.I created this project while exploring the Next.js framework and learning how to handle dynamic routing, API routes, and database integration.

## 🚀 Features
-Shorten long URLs into easy-to-share links

-Dynamic routing with [shorturl] pages in Next.js

-Redirect to the original URL when visiting the short link

-Stores data in MongoDB Atlas (or local MongoDB)

-Fallback redirect to NEXT_PUBLIC_HOST when no short URL is found


## 🛠️ Tech Stack

-Framework: Next.js 14+ (App Router)

-Database: MongoDB

-Styling: Tailwind CSS

-Deployment Ready: Environment variables for host and DB connection

## 📖 Things I Learned

-Basics of Next.js App Router (app/ directory)

-Using dynamic routes with [param]

-Connecting MongoDB with Next.js

-Handling redirects using next/navigation

-Working with environment variables in Next.js

## 🎯 Future Improvements

-Add user authentication

-Track number of clicks per short URL

-Custom aliases for short links

-Deploy on Vercel



## ⚙️ Environment Variables

Create a .env.local file in the root directory:

```bash
MONGODB_URI=your-mongodb-connection-string

NEXT_PUBLIC_HOST=http://localhost:3000

```
## ▶️ Running Locally

1. Clone the repo

```bash

git clone https://github.com/your-username/QuickLinks.git

cd QuickLinks

```

2. Install dependencies

```bash

npm install

```

3. Run the development server
   
```bash

npm run dev

```

4. Visit the app
   
Open http://localhost:3000 in your browser


## 👤 Author
Kunal Jambhale

Built while exploring Next.js 🚀
