# 🕸️ TraceNode

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stack: NestJS](https://img.shields.io/badge/Backend-NestJS-red.svg)](https://nestjs.com/)
[![Stack: Next.js](https://img.shields.io/badge/Frontend-Next.js-black.svg)](https://nextjs.org/)
[![Database: PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue.svg)](https://www.postgresql.org/)

**TraceNode** is an AI-driven system discovery and automated architecture mapping platform built for developers, tech leads, and fast-growing engineering teams. 

Instead of letting system documentation die in outdated Wiki pages, TraceNode connects directly to your GitHub repositories, parses your actual codebase and database schemas, and instantly visualizes your system as an interactive, living node-graph.

[Explore Demo](https://tracenode.dev) • [Documentation](https://docs.tracenode.dev) • [Report Bug](https://github.com/yourusername/tracenode/issues)

---

## ✨ Key Features

- **📂 Live Abstract Syntax Tree (AST) Parsing:** Deep-scans codebases (routes, controllers, and services) and extracts relationships automatically.
- **🗺️ Interactive Architecture Maps:** Renders dynamic, draggable, and clickable system graphs powered by `React Flow`.
- **🤖 Continuously Syncing AI Documentation:** Generates clear, human-readable file summaries and route flows that update on every `git push` via CI/CD Webhooks.
- **🔌 Schema & ERD Mapping:** Auto-detects database models (Prisma, Mongoose, etc.) and visualizes structural relations.
- **⚡ Proactive Impact Analysis:** Warns developers before merging pull requests if their changes might break dependencies in another microservice.

---

## 🛠️ The Tech Stack

TraceNode is built on a modern, scalable, and resilient stack:

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | `Next.js 14+` (App Router) | Interactive canvas, fast UI states, SEO |
| **Styling** | `Tailwind CSS` + `shadcn/ui` | Premium, Minimalist Grayscale Interface |
| **Graph UI** | `React Flow` | Node-based interactive visualization canvas |
| **Backend** | `NestJS` | Scalable microservices framework & core controller engine |
| **Database** | `PostgreSQL` + `Prisma ORM` | Highly-relational data mapping & persistent state storage |
| **Queue** | `Redis` (BullMQ) | Handling asynchronous cloning & processing queue jobs |
| **AI Engine** | `Gemini / OpenAI API` | High-fidelity architectural summarization |