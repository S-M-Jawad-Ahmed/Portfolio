# Data Analyst Portfolio

## Overview
This is a portfolio website for Sheikh Muhammad Jawad Ahmed, a Data Analyst skilled in SQL, R, Python, Excel, Tableau and Power BI. The site showcases data analysis projects and professional skills.

## Project Type
- **Type**: Static website (pre-built Gatsby site)
- **Source**: GitHub import from gh-pages branch
- **Server**: Express.js serving static files

## Architecture
- **Frontend**: Pre-built Gatsby static site with HTML, CSS, and JavaScript
- **Server**: Simple Express.js server serving static files on port 5000
- **Host**: 0.0.0.0:5000 (required for Replit proxy)

## Project Structure
```
.
├── server.js              # Express server to serve static files
├── package.json           # Node.js dependencies
├── index.html             # Main portfolio page
├── about.html             # About page
├── projects/              # Project pages
├── static/                # Static assets (images)
├── page-data/             # Gatsby page data
└── *.js, *.css           # Compiled Gatsby assets
```

## Setup & Running
1. Dependencies are managed via npm (Express.js)
2. Run: `npm start`
3. Server runs on http://0.0.0.0:5000
4. Workflow: "Portfolio Server" is configured to auto-start

## Pages & Features
- **Home**: Introduction and hero section
- **About**: Professional background
- **Projects**: Featured data analysis projects
- **Skills**: Technical skills showcase
- **Contact**: Contact information
- **Dark Mode Toggle**: Available in navigation

## Deployment Notes
- Built as static site, ready for deployment
- Uses autoscale deployment (stateless website)
- No build step needed (already compiled)
