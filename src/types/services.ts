import z from 'zod';

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
