import ai from "../config/gemini";
import { buildPrompt } from "./prompt.service";

export async function analyzeResume(
  resume: string,
  role: string
) {

  const prompt = buildPrompt(role, resume);

  const response = await ai.models.generateContent({

    model: "gemini-2.5-flash",

    contents: prompt

  });

  return response.text;

}