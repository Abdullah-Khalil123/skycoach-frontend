import z from 'zod';
import { CategorySchema, ServiceSchema } from './navigation';

export const GameSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  tag: z.string(),
  categories: z.array(CategorySchema),
  services: z.array(ServiceSchema),
});
export type Game = z.infer<typeof GameSchema>;
