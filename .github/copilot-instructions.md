# Portfolio Project Setup Instructions

This is a Node.js Express portfolio website for Yashwanth Keerthi, configured for deployment on Railway.

## Quick Start

1. Install dependencies: `npm install`
2. Start server: `npm start`
3. Visit `http://localhost:3000`

## Deployment to Railway

1. Push to GitHub
2. Connect repo to Railway at railway.app
3. Railway auto-detects Node.js and deploys

## Project Structure

- `server.js` - Express server
- `public/index.html` - Portfolio content
- `public/css/style.css` - Styling
- `public/js/main.js` - Interactions
- `package.json` - Dependencies and scripts
- `Procfile` - Railway deployment config

## Environment

- Node.js 18.x required
- No additional environment variables needed
- PORT environment variable supported (default: 3000)

## File Modifications

To update portfolio content:
- Edit `public/index.html` for content changes
- Update `public/css/style.css` for styling
- Modify `public/js/main.js` for interactivity
