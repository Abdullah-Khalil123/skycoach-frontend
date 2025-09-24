import z from 'zod';

export const categorySchema = z.object({
  description: z.string().nullable(),
  id: z.number(),
  icon: z.string().nullable(),
  name: z.string(),
  introduction: z.string().nullable(),
  meta_description: z.string().nullable(),
  meta_title: z.string().nullable(),
  slug: z.string(),
  sort: z.number().nullable(),
  status: z.boolean(),
});

export type Category = z.infer<typeof categorySchema>;
