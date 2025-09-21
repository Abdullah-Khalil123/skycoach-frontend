import z from 'zod';

export const articleSchema = z.object({
  admin_id: z.number(),
  author_id: z.number(),
  content: z.string(),
  created_at: z.string(),
  description: z.string(),
  game_id: z.number().nullable(),
  id: z.number(),
  image: z.string(),
  is_top: z.number(),
  name: z.string(),
  slug: z.string(),
  sort: z.number(),
  status: z.number(),
  type: z.number(),
  updated_at: z.string(),
  view: z.number(),
});

export type Article = z.infer<typeof articleSchema>;
