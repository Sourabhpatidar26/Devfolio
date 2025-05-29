'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, MessagesSquare } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { personalizedWelcome, type PersonalizedWelcomeInput } from '@/ai/flows/personalized-welcome';

export function PersonalizedWelcomeClient() {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetWelcomeMessage = async (role: string) => {
    setIsLoading(true);
    setError(null);
    setWelcomeMessage(null);
    try {
      const input: PersonalizedWelcomeInput = { visitorRole: role };
      const result = await personalizedWelcome(input);
      setWelcomeMessage(result.message);
    } catch (e) {
      console.error("Error generating welcome message:", e);
      setError("Sorry, I couldn't generate a personalized message right now. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-card rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-card-foreground mb-4 text-center">How can I help you today?</h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <Button
          onClick={() => handleGetWelcomeMessage('recruiter')}
          disabled={isLoading}
          variant="outline"
          className="w-full sm:w-auto"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          I'm a Recruiter
        </Button>
        <Button
          onClick={() => handleGetWelcomeMessage('potential client')}
          disabled={isLoading}
          variant="outline"
          className="w-full sm:w-auto"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          I'm a Potential Client
        </Button>
      </div>
      
      {isLoading && (
        <div className="flex items-center justify-center text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <span>Crafting a special welcome for you...</span>
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {welcomeMessage && !isLoading && (
        <Alert className="mt-4 bg-primary/10 border-primary/30">
          <MessagesSquare className="h-5 w-5 text-primary" />
          <AlertTitle className="text-primary font-semibold">Personalized Welcome!</AlertTitle>
          <AlertDescription className="text-primary-foreground prose">
            {welcomeMessage}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
