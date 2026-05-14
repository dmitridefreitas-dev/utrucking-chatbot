/**
 * Minimal Express server for the chatbot API.
 * Mounts /chat and /transcribe routes.
 *
 * Start: node server.js
 * Deploy: any Node.js host (Render, Railway, Fly.io, etc.)
 *
 * Required env vars (set in .env or host dashboard):
 *   GROQ_API_KEY    — from console.groq.com
 *   PORT            — default 3001
 *   ALLOWED_ORIGIN  — CORS origin, e.g. https://yoursite.com
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import chatRouter from './routes/chat.js';
import transcribeRouter from './routes/transcribe.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST', 'OPTIONS'],
}));

app.use(express.json({ limit: '12mb' }));

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/chat', chatRouter);
app.use('/transcribe', transcribeRouter);

app.listen(PORT, () => {
  console.log(`[chatbot-api] listening on port ${PORT}`);
});
