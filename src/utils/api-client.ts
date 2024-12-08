import axios from 'axios';
import type { ToneOption } from '../types';

const api = axios.create({
  baseURL: 'https://api.x.ai/v1',
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_XAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export async function generateCompletion(prompt: string) {
  try {
    const response = await api.post('/chat/completions', {
      model: 'grok-beta',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    return response.data.choices[0]?.message?.content;
  } catch (error) {
    console.error('Error calling X.AI API:', error);
    throw error;
  }
}