import { CreateNodeArgs, Actions } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode: ({
  node,
  actions,
  getNode,
}: CreateNodeArgs) => void = ({ node, actions, getNode }: CreateNodeArgs) => {
  const {
    createNodeField,
  }: { createNodeField: Actions['createNodeField'] } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value: string = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
