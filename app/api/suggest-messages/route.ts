import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

export const runtime = "edge";

const openai = createOpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  // baseURL:
  //   "https://gateway.ai.cloudflare.com/v1/YOUR_ACCOUNT_ID/YOUR_GATEWAY/openai",
});

export async function POST() {
  try {
    const prompt = ` Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.`;

    const result = streamText({
      model: openai('gpt-5.1'),
      prompt,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
