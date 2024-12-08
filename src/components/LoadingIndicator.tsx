import React from 'react';
import type { ToneOption } from '../types';

interface LoadingIndicatorProps {
  isLoading: boolean;
  selectedTone: ToneOption | null;
}

export function LoadingIndicator({ isLoading, selectedTone }: LoadingIndicatorProps) {
  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
      <p className="text-gray-600">
        {selectedTone === 'creative' ? '✨ Making your text magical...' : 'Rewriting your text...'}
      </p>
    </div>
  );
}