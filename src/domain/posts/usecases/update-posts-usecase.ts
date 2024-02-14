import type { UseCase } from '@/domain/types';
import { type PostModel, type PostsDatasource } from '@/domain';

export class GetPostsUsecase implements UseCase {
  constructor(private readonly datasource: PostsDatasource) {}

  async execute(
    id: string,
    body: Partial<Pick<PostModel, 'text' | 'title'>>,
  ): Promise<PostModel> {
    return await this.datasource.update(id, body);
  }
}
