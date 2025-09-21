import z from 'zod';

export const bannerSchema = z.object({
  id: z.number(),
  description: z.string().nullable(),
  image: z.string(),
  link: z.string().nullable(),
  name: z.string(),
  stay_time: z.number().nullable(),
});

export type Banner = z.infer<typeof bannerSchema>;
