import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
