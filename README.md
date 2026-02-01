# 💝 Valentine's Day Interactive Experience

A romantic, interactive Valentine's Day website inspired by Instagram reels. Built with React, Tailwind CSS, and Framer Motion.

![Valentine Experience](https://img.shields.io/badge/Made%20with-Love-ff69b4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- **5 Interactive Screens** with smooth transitions
- **Animated Envelope** landing page
- **Choice Selection** with beautiful card UI
- **Shades of Blue** color palette gallery
- **Valentine Interaction** with playful NO responses
- **Growing YES Button** that gets bigger with each NO
- **Confetti Celebration** when YES is clicked
- **Heartfelt Letter** reveal animation
- **Mobile-First** responsive design
- **Pastel Blue** aesthetic theme

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd personal-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
personal-project/
├── public/
│   └── heart.svg           # Favicon
├── src/
│   ├── components/
│   │   ├── LandingScreen.jsx       # Envelope landing page
│   │   ├── ChoiceScreen.jsx        # Path selection
│   │   ├── ShadesOfBlueScreen.jsx  # Color palette
│   │   ├── ValentineScreen.jsx     # Yes/No interaction
│   │   └── FinalMessageScreen.jsx  # Love letter reveal
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Colors

- **Pastel Blue**: Primary theme color
- **Pastel Pink**: Accent for Valentine elements
- **Cream/White**: Cards and backgrounds

### Typography

- **Font**: Nunito (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

### Animations

- Framer Motion for page transitions
- CSS keyframes for floating elements
- Canvas Confetti for celebration effect

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Deploy to GitHub Pages

1. Update `vite.config.js`:

   ```js
   export default defineConfig({
     base: "/your-repo-name/",
     plugins: [react()],
   });
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to GitHub Pages

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

## 🛠️ Technologies Used

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **Canvas Confetti** - Celebration effects

## 💕 Customization

### Change the Love Letter

Edit `src/components/FinalMessageScreen.jsx` to customize the message content.

### Add More Blue Shades

Edit the `blueShades` array in `src/components/ShadesOfBlueScreen.jsx`.

### Modify NO Button Messages

Edit the `noMessages` array in `src/components/ValentineScreen.jsx`.

### Change Colors

Update the color palette in `tailwind.config.js`.

## 📝 License

This project is open source and available under the MIT License.

---

Made with 💙 for Valentine's Day
