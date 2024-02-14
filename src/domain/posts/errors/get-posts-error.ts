import { type ErrorInterface } from '@/domain/errors/error.types';

class GetPostsError extends Error implements ErrorInterface {
  getErrorMessage() {
    return 'Get posts error';
  }
}

export default GetPostsError;
