# FloraVision — Project Documentation

> Version 1.0 · Frontend web application for plant identification and botanical exploration.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Repository Structure](#3-repository-structure)
4. [Environment Setup](#4-environment-setup)
5. [Run Instructions](#5-run-instructions)

---

## 1. Project Overview

FloraVision is a sleek, responsive frontend web application built to bring the world of botany to users' fingertips. The platform enables nature enthusiasts, gardeners, and students to identify plant species, discover detailed care guidelines, and explore a comprehensive digital encyclopedia of flora.

**Core capabilities:**
- Real-time plant identification interface via camera or photo upload
- Dynamic botanical dashboard tracking user discoveries and favorites
- Interactive FloraWiki for exploring curated plant species and care data
- Responsive, accessible user profile and history management

---

## 2. Technology Stack

### Frontend Architecture
| Package | Version | Purpose |
|---|---|---|
| React | ^19.2 | Core UI engine and declarative components |
| Vite | ^7.3 | Lightning-fast build tool and local dev server |
| React Router DOM | ^7.13 | Client-side routing for seamless SPA navigation |
| Axios | ^1.13 | HTTP client for external API integrations |
| TailwindCSS | ^4.1 | Utility-first architecture for responsive layouts |
| Lucide React | ^0.575 | Clean, accessible vector icon library |
| Sonner | ^2.0 | Lightweight toast notifications for user actions |

---

## 3. Repository Structure

```

FloraVision/
├── public/               # Static assets (favicons, public graphics)
├── src/
│   ├── api.js            # Central Axios instance configurations
│   ├── App.jsx           # Root application router and layout shell
│   ├── main.jsx          # React entry point and DOM mounting
│   ├── components/       # Reusable UI components (Navbar, Sidebar, Cards)
│   ├── pages/            # View components (Dashboard, ScanPlant, FloraWiki, Profile)
│   └── styles/           # Global styles and Tailwind utility imports
├── .env                  # Environment configuration file
├── vite.config.js        # Vite bundler parameters
└── package.json          # Project dependencies and operational scripts


```
---

### 📦 Environment Setup

#### Prerequisites

Before running the project, ensure the following software is installed:

* **Node.js** (v18 or later)
* **npm** (v9 or later)

---

### 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/flora-vision.git
```

2. Navigate to the project directory:

```bash
cd flora-vision
```

3. Install all required dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add the following environment variables:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_PLANT_API_KEY=your_external_api_key_here
```

> **Note:** If your project does not use any external APIs, this step can be skipped.

---

### ▶️ Running the Application

#### Start the Development Server

Run the following command:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

The development server supports **Hot Module Replacement (HMR)** for an improved development experience.

---

#### Build for Production

Generate an optimized production build:

```bash
npm run build
```

The compiled production files will be generated inside the `dist/` directory.

---

#### Preview the Production Build

To preview the production build locally before deployment, run:

```bash
npm run preview
```

This command serves the production build from the `dist/` directory, allowing you to verify the application before deploying it.
