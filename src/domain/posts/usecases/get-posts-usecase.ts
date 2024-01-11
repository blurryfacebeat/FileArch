import { type UseCase } from '@/domain/types';
import { type PostModel, type PostsDatasource } from '@/domain';

export class GetPostsUsecase implements UseCase {
  constructor(private readonly datasource: PostsDatasource) {}

  async execute(): Promise<PostModel[]> {
    return await this.datasource.get();
  }
}
