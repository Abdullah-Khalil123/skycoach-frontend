import z from 'zod';

const reviewSchema = z.object({
  id: z.number(),
  title: z.string().min(5).max(100),
  content: z.string().min(10).max(1000),
  rating: z.number().min(1).max(5),
  reviewer_name: z.string().min(2).max(50),
});

export type Review = z.infer<typeof reviewSchema>;
