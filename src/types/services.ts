import z from 'zod';
import { GameSchema } from './games';
import { categorySchema } from './category';

export const serviceSchema = z.object({
  description: z.string(),
  features: z.array(z.string()),
  id: z.number(),
  image: z.string().nullable(),
  icon: z.string().nullable(),
  name: z.string(),
  start_price: z.number(),
  type: z.number(),
  type_label: z.string(),
  url: z.string().nullable(),
});

export type Service = z.infer<typeof serviceSchema>;

export const servicesByGamesSchema = z.object({
  game: GameSchema.optional(),
  hot_services: z.array(serviceSchema).optional(),
  services_by_category: z
    .array(
      z.object({
        category: z.object({
          id: z.number(),
          name: z.string(),
          slug: z.string(),
          icon: z.string().nullable(),
          sort: z.number().nullable(),
        }),
        services: z.array(serviceSchema),
      })
    )
    .optional(),
});

export type ServicesByGames = z.infer<typeof servicesByGamesSchema>;

export const servicesByCategorySchema = z.object({
  category: categorySchema.optional(),
  game: GameSchema.optional(),
  services: z.array(serviceSchema).optional(),
});

export type ServicesByCategory = z.infer<typeof servicesByCategorySchema>;
