import z from 'zod';
import { CategorySchema } from './navigation';
import { ServiceSchema } from './service';

export const GameSchema = z.object({
  id: z.number(),
  name: z.string(),
  short_name: z.string().optional(),
  slug: z.string(),
  is_show_home: z.any().optional(),
  background_image: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional(),
  tag: z.string(),
  categories: z.array(CategorySchema),
  icon: z.string().optional(),
  services: z.array(ServiceSchema),
});
export type Game = z.infer<typeof GameSchema>;
