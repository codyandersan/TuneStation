# TuneStation
A client-side audio streaming SPA (Single Page Application) built with React. This project serves as a frontend engineering case study to explore continuous media playback, complex asynchronous data fetching, and responsive UI design.
## Tech Stack
 * **React 18** with React Router v6 for dynamic, client-side routing.
 * **Tailwind CSS** for responsive, mobile-first styling.
 * **REST API Integration** to handle dynamic media catalog fetching and metadata rendering.
 * **Client-Side Blob Processing** for handling local file exports.
 * **react-top-loading-bar** for seamless UI feedback during asynchronous fetch requests.
 * Deployed via **Vercel**
## How It Works
The architecture relies entirely on client-side state management. When a user navigates the interface, the application asynchronously queries a REST API to retrieve media metadata and streaming URIs.
Playback state is managed globally and piped through the browser's native HTML5 Audio APIs, ensuring continuous playback across route changes without interrupting the user experience. Local data processing is utilized to allow users to generate and save local files dynamically.
## Getting Started
```bash
npm install
npm start

```
To build for production:
```bash
npm run build

```
