import { z } from 'zod';
import { zocker } from 'zocker';

const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
  author: z.string(),
  created_at: z.date(),
});

const responseSchema = z.object({
  posts: z.array(postSchema),
});

type ResponseSchema = z.infer<typeof responseSchema>;

export const validatePostsResponse = (data: unknown): ResponseSchema => {
  try {
    // Сейчас мы мокаем ответ и возвращаем его с помощью zocker
    // return responseSchema.parse(data);

    return zocker(responseSchema).generate();
  } catch {
    throw new Error('Validation error');
  }
};
