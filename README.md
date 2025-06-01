<p align="center">
  <img src="./public/banner.png" alt="ProposalGen Logo" />
</p>

# 📑 ProposalGen

**ProposalGen** is a sleek, modern proposal generator for freelancers, agencies, and consultants. Create elegant, branded PDF proposals in seconds — no design or formatting required.

Built with a focus on theming, automation, and pixel-perfect PDF output, ProposalGen helps you pitch like a pro.

---

## ✨ Features

-   🎨 **Beautiful Themes**  
    Choose from professional templates like **Modern**, **Elegant**, and **Soft Aurora** with live previews.

-   📝 **Dynamic Proposal Builder**  
    Easily input your **scope**, **timeline**, **pricing**, and **terms** — real-time updates and export-ready.

-   ⚡ **Live PDF Preview**  
    Instantly preview your proposal using server-rendered PDFs powered by `@react-pdf/renderer`.

-   📄 **Pixel-Perfect PDF Export**  
    Generate clean, print-friendly proposals tailored for clients.

-   🧠 **Smart Font & Style System**  
    Use templates with elegant fonts like **Lora**, **Nunito**, and **Inter** with ease.

---

## 🖼️ Screenshots

### 🧩 Web UI

<img src="./public/screenshots/form-preview.png" alt="ProposalGen Web App Screenshot" />

---

### 🎨 Theme: Soft Abstract

<img src="./public/screenshots/abstract.png" alt="Soft Abstract Theme" width="600" />

---

### 🌙 Theme: Dark Elegant

<img src="./public/screenshots/elegant.png" alt="Elegant Dark Theme" width="600" />

---

### 💼 Theme: Modern Minimal

<img src="./public/screenshots/modern.png" alt="Modern Theme" width="600" />

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Styling**: TailwindCSS
-   **PDF Engine**: `@react-pdf/renderer` (WASM-safe)
-   **Font Management**: Local font registration (`Lora`, `Inter`, `Nunito`, `Playfair`)
-   **Rendering Preview**: `BlobProvider` + iframe for safe hydration

---

## 🚀 Getting Started

```bash
git clone https://github.com/sidchigo/proposalgen.git
cd proposalgen
npm install
npm run dev
```
Then visit http://localhost:3000 and start generating proposals!

## 📁 Project Structure
```
ProposalGen/
├── .firebase/                 # Firebase configuration files
├── .github/
│   └── workflows/             # GitHub Actions workflows
├── public/                    # Static assets (images, fonts, etc.)
├── src/                       # Source code
│   ├── app/                   # Next.js App Router pages
│   ├── components/            # Reusable React components
│   ├── styles/                # Tailwind and custom styles
│   └── utils/                 # Utility functions and helpers
├── .env                       # Environment variables
├── .eslintrc.json             # ESLint configuration
├── .firebaserc                # Firebase project settings
├── .gitignore                 # Git ignored files
├── README.md                  # Project documentation
├── abstract.pdf               # Sample abstract template PDF
├── elegant.pdf                # Sample elegant template PDF
├── modern.pdf                 # Sample modern template PDF
├── apphosting.yaml            # Firebase Hosting configuration
├── firebase.json              # Firebase configuration
├── firestore.indexes.json     # Firestore indexes
├── firestore.rules            # Firestore security rules
├── jsconfig.json              # JavaScript configuration
├── next.config.mjs            # Next.js configuration
├── package-lock.json          # Dependency lock file
├── package.json               # Project metadata and scripts
├── postcss.config.mjs         # PostCSS configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

## 🌐 Live Demo
👉 https://proposalgen.vercel.app

## 🙏 Acknowledgements
- [@react-pdf/renderer](https://react-pdf.org/)
- [Google Fonts](https://fonts.google.com/)
- [TailwindCSS](https://tailwindcss.com/)
