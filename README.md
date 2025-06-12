Media Website


A sleek, customizable Next.js frontend for managing and accessing your personal media services.
Overview

This project is a personal media center dashboard built with Next.js and Tailwind CSS. It provides a unified interface to access various media services such as:

    Emby — Your personal media server for streaming movies, TV shows, and more.

    Jellyseerr — Request and manage movies and shows easily.

    Ombi — User-friendly request system for your media library.

This dashboard is optimized for easy navigation, responsive design, and seamless integration with your self-hosted media services.
Features

    Clean, modern UI with Tailwind CSS

    Mobile and desktop responsive layout

    Easy to customize links and descriptions for your media services

    Secure external links with noopener noreferrer and target="_blank"

    Uses Next.js for performance and SEO optimization

    Supports deployment with Docker, PM2, or any Node.js hosting

Getting Started
Prerequisites

    Node.js (v18+ recommended)

    npm or yarn

    Access to your media services URLs (Emby, Jellyseerr, Ombi, etc.)

Installation

    Clone the repository:

git clone https://github.com/Sanaker/media-website.git
cd media-website

Install dependencies:

npm install
# or
yarn install

Configure environment variables if needed (e.g. .env.local).

Run the development server:

    npm run dev
    # or
    yarn dev

    Open http://localhost:3000 to see your media dashboard.

Deployment

You can deploy this app using your favorite method:

    PM2 to keep the app running in production.

    Docker for containerized deployment.

    GitHub Actions to automate deployment on push.

Example PM2 start command:

pm2 start npm --name "media-website" -- run start

Customization

Update the links and descriptions in the main page (pages/index.tsx or app/page.tsx) to point to your own media services and customize text/colors as needed.
Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
License

This project is licensed under the MIT License.
Contact

Created and maintained by Sanaker
GitHub: Sanaker
Website: sanakerdagestad.no

If you want me to customize it further based on your repo details (like README content you currently have, or specific instructions), just share!