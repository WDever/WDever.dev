import { CreateWebpackConfigArgs } from 'gatsby';
import path from 'path';

export const onCreateWebpackConfig = ({
  stage,
  actions,
}: CreateWebpackConfigArgs): void => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../../../src'), 'node_modules'],
    },
  });
};
