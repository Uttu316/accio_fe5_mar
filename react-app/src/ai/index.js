import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = "AIzaSyDBjwpmSSz4Ea0kWevPnadycG-Wht9X0t4";

export const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
