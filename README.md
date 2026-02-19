# 🌟 DevEvent: The Ultimate Developer Event Hub

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=for-the-badge&logo=drizzle)](https://orm.drizzle.team/)
[![Neon](https://img.shields.io/badge/Neon-Database-00E599?style=for-the-badge&logo=neon)](https://neon.tech/)

DevEvent is a premium, high-performance platform engineered for the modern developer. It serves as a central hub for discovering and hosting world-class hackathons, technical meetups, and international conferences. Built with a focus on **visual excellence**, **blazing-fast performance**, and **intuitive UX**.

---

## 🚀 Vision

We believe that the best developer experiences happen when people connect. DevEvent is built to bridge the gap between innovation and community, providing a platform that feels as advanced as the technologies it hosts.

---

## ✨ Key Features

### 1. **Intuitive Discovery Engine**
*   **Search & Filter**: Real-time filtering system for events by category (Hackathons, Meetups, Workshops, etc.).
*   **Dynamic Slugs**: SEO-friendly, human-readable URLs for every event.
*   **Visual Priority**: High-quality image support for event banners to grab attention immediately.

### 2. **Premium Web Aesthetics**
*   **Glassmorphism**: A sleek, modern UI using backdrop filters and subtle transparency.
*   **WebGL Backgrounds**: Interactive light rays and shader-based effects using **OGL**.
*   **Micro-animations**: Every button, card, and layout transition is meticulously animated with **Framer Motion**.

### 3. **Developer-First Tools**
*   **Easy Hosting**: A streamlined "Host Event" flow for community organizers.
*   **Registration System**: Capture attendee interest with a robust registration form.
*   **Dark Mode by Default**: Tailored for the developer's eyes with a rich, curated color palette.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router + Turbopack) |
| **Language** | TypeScript |
| **Styling** | Vanilla CSS + Tailwind CSS 4.0 |
| **Database** | Neon (Serverless Postgres) |
| **ORM** | Drizzle ORM |
| **Animations** | Framer Motion |
| **Visual Effects** | OGL (WebGL) |
| **Analytics** | PostHog |
| **Icons** | Lucide React |

---

## 🏗️ Project Structure

```text
/
├── app/                    # Next.js App Router (Routes & Pages)
│   ├── communities/        # Community discovery pages
│   ├── create/             # Event creation flow
│   ├── events/             # Event listing and dynamic [slug] pages
│   └── globals.css         # Modern CSS variables and reset
├── components/             # Atomic & Layout Components
│   ├── EventCard.tsx       # Interactive event display
│   ├── NavBar.tsx          # Sticky glassmorphism navigation
│   ├── LightRays.tsx       # WebGL / OGL background effect
│   └── Footer.tsx          # Premium site footer
├── lib/                    # Core Logic & Integration
│   ├── db/                 # Database schema and client
│   ├── actions.ts          # Server Actions for CRUD operations
│   └── constants.ts        # App-wide fixed data
├── public/                 # Static assets (Images, Icons, Fonts)
└── drizzle.config.ts       # Database orchestration configuration
```

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v20 or later
- **npm**: v10 or later
- **Postgres Database**: A Neon account is recommended for serverless compatibility.

---

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/hiruy72/dev-events-Nextjs-16.git
cd dev-events-Nextjs-16
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory and add the following:
```env
DATABASE_URL=postgres://user:password@host/db  # Your Neon connection string
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx              # PostHog API Key
NEXT_PUBLIC_POSTHOG_HOST=/ingest             # PostHog Host
```

### 4. Database Initialization
Generate and push the schema to your database:
```bash
npx drizzle-kit push
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the magic.

---

## 📦 Deployment

### Vercel (Recommended)
This project is optimized for Vercel. 
- Connect your GitHub repository.
- Add your environment variables in the Vercel dashboard.
- The build command is `npm run build`.

---

## 🛣️ Roadmap

- [ ] **Auth Integration**: Secure user profiles and event management.
- [ ] **Real-time Chat**: Connect with attendees before the event starts.
- [ ] **Ticket Generation**: QR code-based check-in for organizers.
- [ ] **AI Recommendation**: Personalize the event feed based on user interests.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

For any inquiries or feedback, please reach out via:
- **Project Link**: [https://github.com/hiruy72/dev-events-Nextjs-16](https://github.com/hiruy72/dev-events-Nextjs-16)
- **Developer**: [hiruy72](https://github.com/hiruy72)

---

> Built with 💎 and ☕ for the global developer ecosystem.
