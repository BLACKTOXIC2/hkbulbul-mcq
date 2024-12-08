import React, { useState } from 'react';
import { MainHeader } from './components/MainHeader';
import { Header } from './components/Header';
import { TextArea } from './components/TextArea';
import { RewrittenText } from './components/RewrittenText';
import { ToneButtons } from './components/ToneButtons';
import { LoadingIndicator } from './components/LoadingIndicator';
import { Footer } from './components/Footer';
import { rewriteText } from './utils/text-rewriter';
import type { ToneOption } from './types';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedTone, setSelectedTone] = useState<ToneOption | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRewrite = async (tone: ToneOption) => {
    if (!inputText.trim()) {
      setError('Please enter some text to rewrite');
      return;
    }

    setIsLoading(true);
    setError('');
    setSelectedTone(tone);

    const result = await rewriteText(inputText, tone);

    if (result.error) {
      setError(result.error);
    } else {
      setOutputText(result.text);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainHeader />
      
      <main className="flex-grow py-6 md:py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <Header />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <TextArea
                label="Original Text"
                placeholder="Enter your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                error={error}
              />
              <p className="text-sm text-gray-500 text-right">
                {inputText.length} characters
              </p>
            </div>

            <RewrittenText 
              text={outputText}
              tone={selectedTone}
            />
          </div>

          <ToneButtons 
            onSelectTone={handleRewrite}
            isLoading={isLoading}
          />

          <LoadingIndicator 
            isLoading={isLoading}
            selectedTone={selectedTone}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;