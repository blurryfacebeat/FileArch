import { type PostModel } from '@/domain';

export interface PostsDatasource {
  get: () => Promise<PostModel[]>;
  getById: (id: PostModel['id']) => Promise<PostModel>;
  delete: (id: PostModel['id']) => Promise<PostModel>;
  update: (
    id: PostModel['id'],
    body: Partial<Pick<PostModel, 'text' | 'title'>>,
  ) => Promise<PostModel>;
}
