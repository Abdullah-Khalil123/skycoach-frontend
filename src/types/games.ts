import z from 'zod';
import { CategorySchema } from './navigation';
import { ServiceSchema } from './service';

export const GameSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  tag: z.string(),
  categories: z.array(CategorySchema),
  icon: z.string().optional(),
  services: z.array(ServiceSchema),
});
export type Game = z.infer<typeof GameSchema>;
