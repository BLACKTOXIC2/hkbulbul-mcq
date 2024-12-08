import OpenAI from 'openai';
import type { ToneOption, RewriteResponse } from '../types';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function rewriteText(
  text: string,
  tone: ToneOption
): Promise<RewriteResponse> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant that rewrites text to be more ${tone} while maintaining a natural, human tone. Preserve the core message but adapt the style.`
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return {
      text: response.choices[0]?.message?.content || ''
    };
  } catch (error) {
    return {
      text: '',
      error: 'Failed to rewrite text. Please try again.'
    };
  }
}