import { z } from 'zod';
import { GameSchema } from './games';

export const ServiceSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  type: z.number(),
  type_label: z.string(),
  is_hot: z.boolean(),
  image: z.string().nullable(),
  description: z.string(),
  start_price: z.number().nullable(),
  url: z.string(),
});

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
