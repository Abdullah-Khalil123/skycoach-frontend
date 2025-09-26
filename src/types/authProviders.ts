import z from 'zod';

export const authProviderSchema = z.object({
  display_name: z.string(),
  icon: z.string(),
  name: z.string(),
  redirect_url: z.string().url(),
});

export type AuthProvider = z.infer<typeof authProviderSchema>;
