import { generateCompletion } from './api-client';
import { formatBoldText, getTonePrompt } from './text-formatter';
import type { ToneOption, RewriteResponse } from '../types';

export async function rewriteText(
  text: string,
  tone: ToneOption
): Promise<RewriteResponse> {
  try {
    const prompt = getTonePrompt(tone, text);
    const rewrittenText = await generateCompletion(prompt);
    
    if (!rewrittenText) {
      throw new Error('No response from API');
    }

    const formattedText = formatBoldText(rewrittenText);
    
    return {
      text: formattedText,
    };
  } catch (error) {
    return {
      text: '',
      error: 'Failed to rewrite text. Please try again.',
    };
  }
}