# Keen Keeper

**A Modern Friend Relationship Management System**

Never lose touch with your friends. Keen Keeper helps you maintain meaningful relationships by tracking your connections and reminding you when it's time to reach out.

🌐 **[Live Demo](https://keen-keeper-zeta-red.vercel.app/)** - Try it now!

---

## 📋 Table of Contents

- [Live Demo](#live-demo)
- [GitHub Repository](#github-repository)
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Usage](#usage)

---

## � Live Demo

🚀 **[Visit Live Application](https://keen-keeper-zeta-red.vercel.app/)**

Experience Keen Keeper in action! Manage your friendships, track interactions, and never lose touch with people who matter.

---
## 💻 GitHub Repository

📚 **[View on GitHub](https://github.com/RedwanHaasaan/keen-keeper.git)**

Fork, clone, and contribute to the project!

---
## �🎯 About

Keen Keeper is a web application designed to help you maintain and nurture your friendships. In our busy lives, it's easy to lose track of people who matter to us. Keen Keeper solves this by providing an intuitive platform to:

- Maintain a comprehensive friend directory
- Track contact frequency and get reminders
- Monitor relationship status and milestones
- View detailed friend profiles and interactions
- Analyze your social network with visual statistics
- Never miss an important connection

---

## ✨ Features

- **Friend Management**
  - Add and manage your friend list with detailed profiles
  - Store contact information, bio, and tags for easy organization
  - Track profile pictures and personal details

- **Contact Tracking**
  - Monitor days since last contact with each friend
  - Visual status indicators (Almost Due, Overdue, Current)
  - Smart reminders based on your personal contact goals

- **Timeline View**
  - Beautiful timeline visualization of friend interactions
  - Track relationship milestones and important dates
  - Historical records of contact and engagement

- **Statistics Dashboard**
  - Visual analytics of your social network
  - Interactive charts and graphs powered by Recharts
  - Insights into your friendship patterns
  - Real-time statistics updates

- **Detailed Friend Profiles**
  - Comprehensive friend information
  - Contact history and next due date for reaching out
  - Tags and categories for better organization
  - Quick access to contact information

- **Timeline Management**
  - 🔍 Advanced search by friend name or interaction type
  - 📅 Sort timeline entries by date (newest/oldest)
  - 🎯 Filter interactions by type (text, call, video)
  - ⏱️ Track interaction timestamps

- **User Notifications**
  - 🔔 Toast notifications for action confirmations
  - ✅ Feedback when recording interactions
  - ℹ️ Info notifications for timeline updates

- **Loading States**
  - ⏳ Smooth loading spinner while fetching friends
  - Better user experience during data loading

- **Responsive Design**
  - Mobile-friendly interface
  - Works seamlessly on desktop, tablet, and mobile devices
  - Beautiful UI powered by Tailwind CSS and DaisyUI

---

## 🛠️ Tech Stack

**Frontend:**
- **React** (v19.2.4) - UI library for building interactive components
- **React Router DOM** (v7.14.1) - Client-side routing and navigation
- **Vite** (v8.0.4) - Fast build tool and development server
- **Tailwind CSS** (v4.2.2) - Utility-first CSS framework
- **DaisyUI** (v5.5.19) - Component library built on Tailwind CSS
- **Recharts** (v3.8.1) - Data visualization library
- **Lucide React** (v1.8.0) - Beautiful SVG icon library

**Development Tools:**
- **ESLint** (v9.39.4) - Code quality and style checking
- **Vite Plugin React** - React Fast Refresh for hot module reloading
- **React Toastify** (v10+) - Toast notification system

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RedwanHaasaan/keen-keeper.git
   cd keen-keeper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the URL shown in your terminal)

5. **Build for production (optional)**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📁 Project Structure

```
Keen-Keeper/
├── src/
│   ├── app/
│   │   ├── App.jsx          # Main application component
│   │   └── router.jsx       # Route configuration
│   ├── components/
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── ui/
│   │       ├── Chart.jsx           # Chart component
│   │       ├── FriendCard.jsx      # Friend card display
│   │       ├── FriendDetails.jsx   # Friend detail page
│   │       ├── StatCard.jsx        # Statistics card
│   │       └── TimelineCard.jsx    # Timeline card
│   ├── context/
│   │   ├── KeeperContext.jsx       # Context setup
│   │   └── KeeperContaxtProvider.jsx # Context provider
│   ├── hooks/
│   │   └── useKeeperCtx.jsx        # Custom context hook
│   ├── layout/
│   │   └── MainLayout.jsx   # Main layout wrapper
│   ├── Pages/
│   │   ├── ErrorPage.jsx    # Error/404 page
│   │   ├── Home.jsx         # Home page
│   │   ├── Stats.jsx        # Statistics page
│   │   └── Timeline.jsx     # Timeline page
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── public/
│   └── friends.json         # Friend data source
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Project dependencies
└── index.html               # HTML entry point
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot module reloading. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
```
Builds the application for production. The optimized build is created in the `dist/` directory.

### Preview

```bash
npm run preview
```
Previews the production build locally before deployment.

### Lint

```bash
npm run lint
```
Runs ESLint to check code quality and enforce coding standards.

---

## 💡 Usage

### Viewing Your Friends
- Start on the **Home** page to see all your friends
- Each friend card shows their name, picture, and contact status

### Checking Statistics
- Navigate to the **Stats** page to view interactive charts
- See patterns in your friend interactions and network health

### Timeline View
- Visit the **Timeline** page for a chronological view of interactions
- Track milestones and important moments

### Friend Details
- Click on any friend card to view detailed information
- See contact history, next due date, and bio
- Quick access to contact information

---

## 🎨 Features Highlights

- ✅ Real-time contact tracking
- ✅ Visual status indicators
- ✅ Beautiful charts and analytics
- ✅ Responsive design for all devices
- ✅ Fast performance with Vite
- ✅ Clean and intuitive UI with DaisyUI
- ✅ ESLint enforced code quality

---

## 📝 License

This project is part of the Programming Hero Course - Assignment 7.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🤝 Support

For issues or questions about the project, please check the code comments and structure for guidance.

---

**Keep your connections alive with Keen Keeper! 🌟**
