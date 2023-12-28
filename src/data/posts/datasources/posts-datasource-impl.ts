import { PostModel, type PostsDatasource } from '@/domain';
import { validatePostsResponse } from '@/data/posts/validations';

export class PostsDatasourceImpl implements PostsDatasource {
  // any, так как сейчас в проекте нет интерфейса для httpClient
  constructor(private readonly httpClient: any) {}

  async get(): Promise<PostModel[]> {
    try {
      // Если бы был httpClient, то было бы что-то вроде этого
      // this.httpClient.get('URL');

      const { posts } = await validatePostsResponse({});

      return posts.map(({ id, text, title, created_at, author }) => {
        return new PostModel(id, title, text, author, created_at);
      });
    } catch {
      throw new Error('Get posts error');
    }
  }

  async getById(id: PostModel['id']): Promise<PostModel> {
    return new PostModel('1', '1', '1', '1', new Date());
  }

  async delete(id: PostModel['id']): Promise<PostModel> {
    return new PostModel('1', '1', '1', '1', new Date());
  }

  async update(
    id: PostModel['id'],
    body: Partial<Pick<PostModel, 'text' | 'title'>>,
  ): Promise<PostModel> {
    return new PostModel('1', '1', '1', '1', new Date());
  }
}
