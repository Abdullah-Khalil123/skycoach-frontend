import { z } from 'zod';
import { GameSchema } from './games';

export const CategoryChildSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
});

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  children: z.array(CategoryChildSchema),
});

export const NavigationSchema = z.array(GameSchema);

export type Navigation = z.infer<typeof NavigationSchema>;
