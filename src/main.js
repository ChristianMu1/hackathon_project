import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";

dotenv.config();

//api key automatically loaded
const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Prompt",
  });
  console.log(response.text);
}

main();
