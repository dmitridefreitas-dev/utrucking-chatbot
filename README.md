# UTrucking Helper — Chatbot

Full-stack AI chatbot for the UTrucking website. Everything is pre-configured and ready to deploy.

## Structure

```
chatbot/
├── frontend/
│   ├── ChatbotWidget.jsx   — React component (requires framer-motion)
│   ├── chatbotContext.js   — UTrucking knowledge base & fallback replies
│   └── chatbot.css         — White + #124694 blue theme
└── api/
    ├── server.js           — Express entry point (port 3001)
    ├── package.json
    ├── .env                — API keys (already filled in)
    ├── .env.example
    └── routes/
        ├── chat.js         — POST /chat  (Groq LLM, streaming SSE)
        └── transcribe.js   — POST /transcribe  (Groq Whisper STT)
```

## Deploy the API

```bash
cd api
npm install
npm start
```

Deploy to Render / Railway / Fly.io — set the env vars from `.env` in the host dashboard.

## One thing to update before going live

In `frontend/ChatbotWidget.jsx`, replace the placeholder with your deployed API URL:

```js
const API_BASE_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : 'https://YOUR-API-URL.onrender.com'; // ← replace this with your Render/Railway URL
```

## Add to the UTrucking site

```jsx
import ChatbotWidget from './chatbot/frontend/ChatbotWidget';
import './chatbot/frontend/chatbot.css';

export default function App() {
  return (
    <>
      {/* existing site */}
      <ChatbotWidget />
    </>
  );
}
```

> **Dependency**: `npm install framer-motion`
>
> **Bot avatar**: place `utrucking-chatbot.png` in your app's `public/` directory if you switch back to the image trigger.
