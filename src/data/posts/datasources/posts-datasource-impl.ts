import { PostModel, type PostsDatasource } from '@/domain';
import { validatePostsResponse } from '@/data/posts/validations';
import GetPostsError from '@/domain/posts/errors/get-posts-error';

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
      throw new GetPostsError();
    }
  }

  async getById(id: string): Promise<PostModel> {
    return new PostModel('1', '1', '1', '1', new Date());
  }

  async delete(id: string): Promise<PostModel> {
    return new PostModel('1', '1', '1', '1', new Date());
  }

  async update(
    id: string,
    body: Partial<Pick<PostModel, 'text' | 'title'>>,
  ): Promise<PostModel> {
    return new PostModel('1', '1', '1', '1', new Date());
  }
}
