import type { ToneOption } from '../types';

export function formatBoldText(text: string): string {
  // Replace **text** with proper bold formatting while preserving emojis
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export function getTonePrompt(tone: ToneOption, text: string): string {
  const prompts = {
    creative: `Rewrite the following text in a creative and engaging way. Use **bold** for emphasis (using exactly two asterisks on each side, like **this**). Add relevant emojis throughout the text to make it more expressive and fun, but don't overdo it. Keep the core message intact while making it more engaging: "${text}"`,
    friendly: `Rewrite the following text to be more friendly and approachable. Use **bold** for emphasis (using exactly two asterisks on each side, like **this**) while keeping its main points: "${text}"`,
    professional: `Rewrite the following text in a professional and polished manner. Use **bold** for emphasis (using exactly two asterisks on each side, like **this**) while preserving its key message: "${text}"`,
  };
  return prompts[tone];
}