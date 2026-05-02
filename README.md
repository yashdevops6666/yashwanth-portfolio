# Yashwanth Keerthi - Professional Portfolio

A modern, responsive portfolio website for Yashwanth Keerthi, showcasing professional experience, skills, and certifications in DevOps Engineering.

## Features

- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Modern UI** - Clean, professional design with smooth animations
- **Fast Loading** - Lightweight HTML, CSS, and JavaScript
- **SEO Optimized** - Proper semantic HTML and metadata
- **Easy Deployment** - Ready for Railway, Heroku, or any Node.js hosting

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: Railway (recommended), Heroku, or any cloud platform

## Local Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd yashwanth-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment

### Railway Deployment

1. **Create a Railway Account**: Visit [railway.app](https://railway.app)

2. **Connect your GitHub repository**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize and select this repository

3. **Configure Environment**:
   - Railway will automatically detect the Node.js environment
   - No additional environment variables needed

4. **Deploy**:
   - Railway will automatically build and deploy on every push to main
   - Your site will be live at a Railway-provided URL

5. **Custom Domain** (Optional):
   - Go to Settings → Domain
   - Add your custom domain

### Alternative Deployments

**Heroku**:
```bash
heroku create
git push heroku main
```

**Vercel** (with serverless):
- Create `vercel.json` configuration
- Deploy via Vercel CLI

## Project Structure

```
├── public/
│   ├── index.html          # Main portfolio page
│   ├── css/
│   │   └── style.css       # Styling
│   └── js/
│       └── main.js         # JavaScript interactions
├── server.js               # Express server
├── package.json            # Dependencies and scripts
├── Procfile                # Process file for deployment
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Customization

To customize the portfolio:

1. **Edit Content**: Modify `public/index.html`
2. **Change Styling**: Update `public/css/style.css`
3. **Update Colors**: Modify CSS custom properties in `:root` selector
4. **Add Interactivity**: Enhance `public/js/main.js`

## Environment Variables

The application supports the following environment variable:

- `PORT`: The port the server runs on (default: 3000)

## License

MIT License - Feel free to use this template for your own portfolio.

## Author

Yashwanth Keerthi - DevOps Engineer

## Contact

- **Email**: iamkeerthiyashwanth@gmail.com
- **LinkedIn**: [yashwanthkeerthi](https://www.linkedin.com/in/yashwanthkeerthi)
- **Location**: London, England
