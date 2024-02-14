import { type ErrorInterface } from '@/domain/errors/error.types';

class ApplicationError extends Error implements ErrorInterface {
  getErrorMessage() {
    return 'Default Error';
  }
}

export default ApplicationError;
