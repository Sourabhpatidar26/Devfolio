
'use server';

import type { ContactFormValues } from "@/lib/form-schemas";

export async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Server Action: Form data submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  // For now, always return success. In a real app, you'd handle actual submission.
  return { success: true, message: "Your message has been sent successfully! I'll get back to you soon." };
}
