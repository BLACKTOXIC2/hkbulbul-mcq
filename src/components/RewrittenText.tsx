import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from './Button';
import { TextArea } from './TextArea';
import { cn } from '../utils/cn';

interface RewrittenTextProps {
  text: string;
  tone?: string;
  className?: string;
}

export function RewrittenText({ text, tone, className }: RewrittenTextProps) {
  const [copied, setCopied] = React.useState(false);
  const characterCount = text.length;

  const copyToClipboard = async () => {
    try {
      // Copy the raw text without HTML tags
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = text;
      await navigator.clipboard.writeText(tempDiv.textContent || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-medium text-gray-900">Rewritten Text</h3>
          {tone && (
            <p className="text-sm text-gray-500 capitalize">
              Tone: {tone}
            </p>
          )}
        </div>
        <Button
          variant="secondary"
          onClick={copyToClipboard}
          icon={copied ? Check : Copy}
          className="h-8 px-3"
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>

      <div 
        className="min-h-[150px] p-3 rounded-lg border border-gray-300 bg-gray-50"
        dangerouslySetInnerHTML={{ __html: text || 'Your rewritten text will appear here...' }}
      />

      <div className="flex justify-end">
        <p className="text-sm text-gray-500">
          {characterCount} characters
        </p>
      </div>
    </div>
  );
}