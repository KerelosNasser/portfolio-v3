# Portfolio V3

A modern, high-performance portfolio website built with the latest web technologies. This project showcases a sleek design with advanced animations and interactive elements.

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Core:** React 19
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler-icons.io/)
- **Language:** TypeScript

## ✨ Features

- **Modern Hero Section:** Engaging landing area with typewriter effects.
- **Interactive Navigation:** Custom `Navbar` and `Floating Dock` for seamless navigation.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Dynamic Animations:** Smooth transitions and effects powered by Framer Motion.
- **Modular Components:** specific UI components like `typewriter-effect` and `floating-dock` for unique visual flair.

## 📂 Project Structure

```
portfolio-v3/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── globals.css       # Global styles (Tailwind)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # Reusable React components
│   ├── ui/               # Specialized UI elements (Floating Dock, Typewriter)
│   ├── Hero.tsx          # Hero section component
│   └── Navbar.tsx        # Navigation bar
├── public/               # Static assets
└── package.json          # Project dependencies and scripts
```

## 🛠️ Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd portfolio-v3
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the project:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🔮 Future Roadmap

- [ ] Add Projects showcase section.
- [ ] Implement Dark/Light mode toggle.
- [ ] Add "About Me" and "Contact" sections.
- [ ] Integrate a CMS for dynamic content.

---

Built with ❤️ by Kerelos Nasser
