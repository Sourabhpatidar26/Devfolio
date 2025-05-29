'use server';

/**
 * @fileOverview A personalized welcome message generator for portfolio visitors.
 *
 * - personalizedWelcome - A function that generates a personalized welcome message based on the visitor's role.
 * - PersonalizedWelcomeInput - The input type for the personalizedWelcome function.
 * - PersonalizedWelcomeOutput - The return type for the personalizedWelcome function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWelcomeInputSchema = z.object({
  visitorRole: z
    .string()
    .describe("The role of the visitor (e.g., 'recruiter', 'client')."),
});
export type PersonalizedWelcomeInput = z.infer<typeof PersonalizedWelcomeInputSchema>;

const PersonalizedWelcomeOutputSchema = z.object({
  message: z.string().describe('The personalized welcome message.'),
});
export type PersonalizedWelcomeOutput = z.infer<typeof PersonalizedWelcomeOutputSchema>;

export async function personalizedWelcome(input: PersonalizedWelcomeInput): Promise<PersonalizedWelcomeOutput> {
  return personalizedWelcomeFlow(input);
}

const personalizedWelcomePrompt = ai.definePrompt({
  name: 'personalizedWelcomePrompt',
  input: {schema: PersonalizedWelcomeInputSchema},
  output: {schema: PersonalizedWelcomeOutputSchema},
  prompt: `You are a helpful assistant designed to generate personalized welcome messages for visitors to a software engineer's portfolio.

  The visitor's role is: {{{visitorRole}}}.

  Generate a short, engaging welcome message (maximum 50 words) that acknowledges their role and highlights the portfolio's key offerings.  Focus on how Sourabh's skills and experience can benefit them, such as his experience in React.js, React Native, and Swift, full-stack web and mobile application development, and dedication to product excellence. Make sure to mention Sourabh's name.
`,
});

const personalizedWelcomeFlow = ai.defineFlow(
  {
    name: 'personalizedWelcomeFlow',
    inputSchema: PersonalizedWelcomeInputSchema,
    outputSchema: PersonalizedWelcomeOutputSchema,
  },
  async input => {
    const {output} = await personalizedWelcomePrompt(input);
    return output!;
  }
);
