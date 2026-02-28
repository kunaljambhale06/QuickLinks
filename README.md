<div align="center">

# 🔗 QuickLinks

### A Production-Ready URL Shortener

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)


A full-stack URL shortener built with **Next.js App Router** and **MongoDB** — fully containerized with Docker and deployed on Vercel.

[🚀 Live Demo](https://your-vercel-url.vercel.app) · [🐳 DockerHub](https://hub.docker.com/r/kunaljambhale06/quicklinks-web) · [📂 Repository](https://github.com/kunaljambhale06/QuickLinks)

</div>

---

## ✨ Features

- 🔗 Shorten long URLs into clean, shareable links
- ⚡ Instant redirects via dynamic `[shorturl]` routing
- 🗄️ MongoDB Atlas integration (works locally too)
- 🐳 Fully containerized — runs anywhere with Docker
- 📦 Optimized multi-stage production Docker build
- ☁️ Serverless cloud deployment on Vercel
- 🔐 Secure environment-based configuration

---

## 🧠 Architecture

**Production (Vercel)**
```
User → Vercel Edge → Next.js Serverless Functions → MongoDB Atlas
```

**Local Development (Docker)**
```
User → Next.js App Container → MongoDB Container
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15+ (App Router) |
| Backend API | Next.js Route Handlers |
| Database | MongoDB |
| Styling | Tailwind CSS |
| Containerization | Docker (Multi-stage build) |
| Orchestration | Docker Compose |
| Cloud Deployment | Vercel |
| Image Registry | DockerHub |

---

## 🚀 Getting Started

### Option 1 — Run with Docker Compose (Recommended)

```bash
git clone https://github.com/kunaljambhale06/QuickLinks.git
cd QuickLinks
docker-compose up --build
```

Visit → `http://localhost:3000`

---

### Option 2 — Manual Multi-Container Setup

```bash
# Create a shared network
docker network create quicklinks-net

# Start MongoDB
docker run -d \
  --name mongo \
  --network quicklinks-net \
  mongo:6

# Start the app
docker run -d \
  --name quicklinks-app \
  --network quicklinks-net \
  -p 3000:3000 \
  -e MONGODB_URI=mongodb://mongo:27017/QuickLink \
  kunaljambhale06/quicklinks-web:latest
```

---

### Option 3 — Run Without Docker

**1. Clone the repository**
```bash
git clone https://github.com/kunaljambhale06/QuickLinks.git
cd QuickLinks
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your-mongodb-connection-string
NEXT_PUBLIC_HOST=http://localhost:3000
```

**4. Start the development server**
```bash
npm run dev
```

Visit → `http://localhost:3000`

---

## 🐳 DockerHub

Pull the latest production image:

```bash
docker pull kunaljambhale06/quicklinks-web:latest
```

---

## ☁️ Deploying to Vercel

1. Push the project to GitHub
2. Import the repository at [vercel.com](https://vercel.com)
3. Add the following environment variable in the Vercel dashboard:

```env
MONGODB_URI=your-mongodb-atlas-uri
```

4. Every push to `main` triggers an automatic production deployment ✅

---

## 📚 What I Learned

Building this project covered the full DevOps + full-stack lifecycle:

- **Next.js** — App Router architecture, dynamic routing with `[param]`, API route handlers
- **MongoDB** — Server-side integration, Atlas setup, environment-based config
- **Docker** — Multi-stage builds, networking, container separation of concerns
- **Docker Compose** — Multi-container orchestration
- **DockerHub** — Publishing and pulling production images
- **Vercel** — Serverless deployment, build-time vs runtime environment variables
- **Debugging** — Resolving production deployment issues across environments

---

## 🎯 Roadmap

- [ ] 🔐 User authentication (JWT / OAuth)
- [ ] 📊 Click analytics per shortened URL
- [ ] 🎨 Custom alias support
- [ ] 🌍 Custom domain mapping
- [ ] 📈 Rate limiting & input validation
- [ ] 🧪 Unit & integration testing
- [ ] 🚀 CI/CD pipeline with GitHub Actions
- [ ] ☸️ Kubernetes deployment

---

## 👨‍💻 Author

**Kunal Jambhale**

Full-stack developer exploring modern web architecture, containerization, cloud deployment, and DevOps.

[![GitHub](https://img.shields.io/badge/GitHub-kunaljambhale06-181717?style=flat-square&logo=github)](https://github.com/kunaljambhale06)

---

<div align="center">

⭐ **If you found this project useful, consider giving it a star!** ⭐

</div>
