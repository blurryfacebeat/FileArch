import { BaseUseCase } from '@/domain/core/use-case';
import { type PostModel, type PostsDatasource } from '@/domain';

export class GetPostsUsecase extends BaseUseCase {
  constructor(private readonly datasource: PostsDatasource) {
    super();
  }

  async execute(
    id: PostModel['id'],
    body: Partial<Pick<PostModel, 'text' | 'title'>>,
  ): Promise<PostModel> {
    return await this.datasource.update(id, body);
  }
}
