import z from 'zod';

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

export type Service = z.infer<typeof ServiceSchema>;
