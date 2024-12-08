import React from 'react';
import { Wand2, Smile, Briefcase } from 'lucide-react';
import { Button } from './Button';
import type { ToneOption } from '../types';

interface ToneButtonsProps {
  onSelectTone: (tone: ToneOption) => void;
  isLoading: boolean;
}

export function ToneButtons({ onSelectTone, isLoading }: ToneButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button
        onClick={() => onSelectTone('creative')}
        disabled={isLoading}
        icon={Wand2}
        className="w-full sm:w-auto"
      >
        Creative ✨
      </Button>
      <Button
        onClick={() => onSelectTone('friendly')}
        disabled={isLoading}
        icon={Smile}
        className="w-full sm:w-auto"
      >
        Friendly
      </Button>
      <Button
        onClick={() => onSelectTone('professional')}
        disabled={isLoading}
        icon={Briefcase}
        className="w-full sm:w-auto"
      >
        Professional
      </Button>
    </div>
  );
}