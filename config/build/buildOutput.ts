import { type Configuration } from 'webpack';
import { type BuildOptions } from './types';

export const buildOutput = (options: BuildOptions): Configuration['output'] => {
  const { paths } = options;

  return {
    path: paths.output,
    filename: '[name].[contenthash].js',
    clean: true,
  };
};
