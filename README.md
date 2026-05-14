# UTrucking Helper — Chatbot

Full-stack AI chatbot widget. Drop `frontend/` into any React app and deploy `api/` to any Node.js host.

## Structure

```
chatbot/
├── frontend/
│   ├── ChatbotWidget.jsx   — React component (requires framer-motion)
│   ├── chatbotContext.js   — Knowledge base & fallback replies  ← EDIT THIS
│   └── chatbot.css         — All styles (CSS variables for theming)
└── api/
    ├── server.js           — Express entry point
    ├── package.json
    ├── .env.example
    └── routes/
        ├── chat.js         — POST /chat  (Groq LLM, streaming SSE)  ← EDIT system prompt
        └── transcribe.js   — POST /transcribe  (Groq Whisper STT)
```

## Customising for a new site

### 1. Knowledge base (frontend)
Edit `frontend/chatbotContext.js`:
- Replace `quickActions` with your chip labels/prompts
- Replace `kb` object with your own content
- Replace `LINKS` with your site's pages and external URLs
- Update `getFallbackReply()` keyword patterns to match your content

### 2. System prompt (backend)
Edit `api/routes/chat.js` → `buildSystemPrompt()`:
- Replace the identity/services/FAQs sections with your content
- This is what the LLM actually reads — keep it thorough

### 3. API URL (frontend)
In `frontend/ChatbotWidget.jsx`, update `API_BASE_URL`:
```js
const API_BASE_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : 'https://YOUR-API-URL.onrender.com'; // ← your deployed API
```

### 4. Bot avatar image
Copy `utrucking-chatbot.png` into your app's `public/` directory. The widget loads it from `/utrucking-chatbot.png` at the root of your site.

### 5. Theming
`chatbot.css` uses CSS custom properties (`--cb-*`). The default theme is white + UTrucking blue (`#124694`). Override variables in your own stylesheet to match a different palette.

## Deploying the API

```bash
cd api
cp .env.example .env
# fill in your keys
npm install
npm start
```

Deploy to Render / Railway / Fly.io — set env vars in the host dashboard, not in `.env`.

### Required API keys
| Key | Where to get it |
|-----|----------------|
| `GROQ_API_KEY` | console.groq.com — free tier available |

## Using in your React app

```jsx
// In your root component or App.jsx:
import ChatbotWidget from './chatbot/frontend/ChatbotWidget';
import './chatbot/frontend/chatbot.css';

export default function App() {
  return (
    <>
      {/* your existing app */}
      <ChatbotWidget />
    </>
  );
}
```

> **Dependency**: `npm install framer-motion`
