# James Summersby - Profile App

## Overview
A modern, single-page profile application built with React, TypeScript, and Tailwind CSS. The design is inspired by the minimal and premium aesthetic of standard industry portfolios, featuring light and dark mode support.

## Features
- **Responsive Design**: Looks great on mobile and desktop.
- **Theme Support**: Seamless light and dark mode switching.
- **Project Showcase**: Pinned projects and portfolio highlights.
- **CI/CD**: Automatic deployment to GitHub Pages via GitHub Actions.

## Tech Stack
- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4) + PostCSS
- **Icons**: Lucide React
- **Theming**: next-themes
- **Utilities**: clsx, tailwind-merge

## Deployment
This project is configured to deploy automatically to GitHub Pages.

### Setup Instructions
To enable deployment:
1. Go to this repository's **Settings** > **Actions** > **General**.
2. Under **Workflow permissions**, select **Read and write permissions**.
3. Click **Save**.

The site will be live at `https://Summersby95.github.io/profile-app/`.

## Local Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
