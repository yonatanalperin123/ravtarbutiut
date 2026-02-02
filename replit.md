# The Library - Digital Archive

## Overview
A visually stunning digital library experience featuring an interactive 3D book reader with Hebrew text support. The project includes immersive features like night mode, candle light effects, dust particles, and custom cursor.

## Project Structure
- `index.html` - Main HTML file with the library interface
- `style.css` - Custom CSS styling
- `script.js` - Main JavaScript functionality
- `book1_content.js` - Book content data
- `server.js` - Simple Node.js static file server for development
- `*.png`, `*.jpg` - Book page images and background assets
- `*.otf` - Custom fonts (EzerFranzisca, SimplerPro)
- `book.glb` - 3D book model

## Tech Stack
- Vanilla HTML/CSS/JavaScript
- Tailwind CSS (via CDN)
- Node.js static file server

## Running the Project
The project runs on port 5000 using a simple Node.js static file server:
```
node server.js
```

## Deployment
Configured as a static site deployment serving from the root directory.
