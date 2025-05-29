
'use server';

import * as z from "zod";

export const ContactFormValuesSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
});

export type ContactFormValues = z.infer<typeof ContactFormValuesSchema>;

export async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Server Action: Form data submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  // For now, always return success. In a real app, you'd handle actual submission.
  return { success: true, message: "Your message has been sent successfully! I'll get back to you soon." };
}
