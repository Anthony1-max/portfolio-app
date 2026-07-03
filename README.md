# Portfolio App

A React portfolio website scaffolded with Vite.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal.

## Customize
- Edit `src/App.jsx` to update copy and projects.
- Adjust styling in `src/styles.css`.

## Deploying to GitHub Pages
This project includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that builds the app and publishes the generated `dist/` folder to GitHub Pages when you push to the `main` branch.

### Steps
1. Create a GitHub repository for the project.
2. Install Git if it is not already available on your machine.
3. Initialize Git locally if needed:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   ```
4. Add your GitHub remote and push:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```
5. Wait for GitHub Actions to finish the deploy workflow. The site is published automatically from the `dist/` folder.

### Published site URL
- For a project repo: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- For a user site repo named `YOUR_USERNAME.github.io`: `https://YOUR_USERNAME.github.io/`

> Note: `vite.config.js` is already configured with `base: './'`, which helps the app load correctly on GitHub Pages.

## Share on LinkedIn
Once published, add the live site URL to your LinkedIn profile under "Contact info" or share it in a post or featured section.
