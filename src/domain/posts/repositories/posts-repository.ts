import { type PostModel } from '@/domain';

export interface PostsRepository {
  get: () => Promise<PostModel[]>;
  getById: (id: string) => Promise<PostModel>;
  delete: (id: string) => Promise<PostModel>;
  update: (
    id: string,
    body: Partial<Pick<PostModel, 'text' | 'title'>>,
  ) => Promise<PostModel>;
}
