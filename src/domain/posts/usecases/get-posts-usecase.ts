import { type UseCase } from '@/domain/types';
import { type PostModel, type PostsRepository } from '@/domain';

export class GetPostsUsecase implements UseCase {
  constructor(private readonly datasource: PostsRepository) {}

  async execute(): Promise<PostModel[]> {
    return await this.datasource.get();
  }
}
